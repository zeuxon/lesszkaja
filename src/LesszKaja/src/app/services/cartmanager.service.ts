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
        return localStorage === undefined || localStorage.getItem("kosar") === null ? "" : localStorage.getItem("kosar");
    }

    incrRecord(id: number, extrak: Map<String, boolean>): any{
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
                    if(value !== extrak.get(key)) {
                        mismatch = true;
                        break;
                    }
                }
            }
            if(mismatch === false && id === parseInt(values[0])){
                let newNum = parseInt(values[2]) + 1;
                newString += values[0] + "$" +values[1] + "$" + newNum.toString() + "\n"
            }else{
                newString += values[0] + "$" +values[1] + "$" + values[2] + "\n"
            }
        }
        localStorage.setItem("kosar", newString);
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