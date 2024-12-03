import { KeyValuePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { parse } from "path";

@Injectable({
    providedIn: 'root',
  })
export class CartManagerService {
    
    addToCart(termek_id: number, extrak: Map<String, boolean>): void{
        let toStore: String = termek_id.toString() + "$" + JSON.stringify(Object.fromEntries(extrak.entries()));

        if(this.checkIfExists(toStore)){
            this.incrRecord(termek_id, extrak);
            return;
        }

        localStorage.setItem("kosar", this.getCart() + toStore + "$1\n");


        //this.nextCartSize();
    }

    private checkIfExists(toStore: any){
        return this.getCart().includes(toStore);
    }

    private getCart(): any {
        return typeof localStorage == 'undefined' || localStorage.getItem("kosar") === null ? "" : localStorage.getItem("kosar");
    }

    incrRecord(id: number, extrak: Map<any, boolean>): any{
        let storageItem = localStorage.getItem("kosar");
        if(storageItem === null) return;

        let array = storageItem.split("\n");
        let newString = "";

        //Rosszabb kódot nehéz lett volna írni 🔥🔥🔥
        for(let item of array){
            if(item.length === 0) continue;
            let values = item.split("$");
            let map = new Map(Object.entries(JSON.parse(values[1])));
            let mismatch = false;
            if(map.size !== 0){
                for(let [key, value] of map){
                    if(value != extrak.get(Number.parseInt(key))) {
                        mismatch = true;
                        break;
                    }
                }
            }

            console.log(mismatch);
            if(mismatch === false && id == parseInt(values[0])){
                let newNum = parseInt(values[2]) + 1;
                newString += values[0] + "$" +values[1] + "$" + newNum.toString() + "\n"
            }else{
                newString += values[0] + "$" +values[1] + "$" + values[2] + "\n"
            }
        }
        localStorage.setItem("kosar", newString);
    }

    getCartArray(): any{
        let storageItem = this.getCart();
        if(storageItem == "") return;

        let array = storageItem.split("\n");

        let returnArray: Array<{termek_id: number, etterem_id: number, extrak: any, db: number, nev: String}> = [];

        let index = 0;
        for(let item of array){
            if(item.length === 0) continue;

            let values = item.split("$");
            let map = new Map(Object.entries(JSON.parse(values[1])));

            returnArray[index] = {termek_id: parseInt(values[0]), etterem_id: 0, extrak: map, db: parseInt(values[2]), nev: "Termék?"};
            index++;
        }

        return returnArray;
    }

    private cartToArray(): any{
        let kosar: String = this.getCart();
        if(kosar === "") return undefined;

        let kosarRows = kosar.split("\n");

        let kosarArray: Array<{id: number, extrak: any, db: number}> = [];
        for(let index = 0; index < kosarRows.length; index++){
            if(kosarRows[index].length === 0) continue;
            let kosarData = kosarRows[index].split("$");
            let map = new Map(Object.entries(JSON.parse(kosarData[1])));
            kosarArray[index] = {id: parseInt(kosarData[0]), extrak: map, db: parseInt(kosarData[2])};
        }
        return kosarArray;
    }

    private arrayToCart(array: any): void{
        let kosar: String = this.getCart();
        if(kosar === "") return;

        let cart = "";
        for(let kosarRow of array){
            cart += kosarRow.id + "$" + JSON.stringify(Object.fromEntries(kosarRow.extrak.entries())) + "$" + kosarRow.db + "\n";
        }
        
        localStorage.setItem("kosar", cart);
    }

    setItemCount(index: number, count: number): void {
        if(count < 1) count = 1;
        let cart = this.cartToArray();
        if(cart === undefined) return; 

        cart[index].db = count;

        this.arrayToCart(cart);
    }

    removeItem(index:number){
        let cart = this.cartToArray();
        if(cart === undefined) return; 

        cart.splice(index, 1);

        this.arrayToCart(cart);
    }

    modifyItem(index: number, termek_id: number, extrak: Map<String, boolean>): boolean {
        let toStore: String = termek_id.toString() + "$" + JSON.stringify(Object.fromEntries(extrak.entries()));

        let cart = this.cartToArray();
        if(cart === undefined || index > cart.length-1 || index < 0) return false;

        if(this.checkIfExists(toStore)){
            if(cart[index].id == termek_id){
                let mismatch: Boolean = false;
                for(let [key, value] of extrak){
                    if(value != cart[index].extrak.get(key)) {
                        mismatch = true;
                        break;
                    }
                }
                return !mismatch;
            }
            return false;
        }

        let oldDb = cart[index].db;
        cart[index] = {id: termek_id, extrak: extrak, db: oldDb};

        this.arrayToCart(cart);
        return true;
    }

    private mapToString(map: Map<String, boolean>): String {
        let string = "";
        for(let [key, value] of map){
            string += key + "=" + (value ? '1' : '0') + ";";
        }
        return string;
    }

    nextCartSize(): void{
        let currentSize = localStorage.getItem("kosarMeret");
        if(currentSize === null){
            localStorage.setItem("kosarMeret", '1');
        }else{
            localStorage.setItem("kosarMeret", (parseInt(currentSize) + 1).toString());
        }
    }


}