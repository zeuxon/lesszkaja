import { Component, OnInit } from '@angular/core';
import { CartManagerService } from '../../../../services/cartmanager.service';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {

  itemsArray: Array<{termek_id: number, etterem_id: number, extrak: any, db: number, nev: String}> = [];

  constructor(private cartManager: CartManagerService, private rotuer: Router, private http: HttpClient){
  }

  modifyItem(modifiedIndex: number): void{
    if(modifiedIndex > this.itemsArray.length-1 || modifiedIndex < 0) return;

    let removedItem = this.itemsArray[modifiedIndex];

    //this.cartManager.removeItem(modifiedIndex, removedItem);
    
    /*
    this.rotuer.navigate([removedItem.etterem_cim + ""], {queryParams: {
      modifying: true,
    }});
    */
    this.rotuer.navigate(["/restaurants/" + removedItem.etterem_id + "/" + removedItem.termek_id], {queryParams: {
      modifying: true,
      index: modifiedIndex
      //4. mérföldkőben max majd átadja a extrákat módosításnál és betölti hogy mi volt kiválasztva de ehhez kéne még egy sql query úgyhogy így hagyom
      //extrak: this.extraToString(modifiedIndex)
    }});

    //console.log(removedItem);
  }

  private extraToString(index: number){
    if(this.itemsArray[index].extrak === undefined) return "";
    let string = "";
    for(let [key, value] of this.itemsArray[index].extrak){
      if(value) {
        string += key + ";";
      }
    }
    return string;
  }

  removeItem(removedIndex: number): void{
    if(removedIndex > this.itemsArray.length-1 || removedIndex < 0) return;
    let removedItem = this.itemsArray.splice(removedIndex, 1)[0];

    this.cartManager.removeItem(removedIndex);
  }

  ngOnInit(): void {
    this.itemsArray = this.cartManager.getCartArray();

    if(this.itemsArray !== undefined){
      this.http.post("http://localhost:3000/getitem", {array: this.itemsArray}).subscribe((response: any) => {
        for(let item of this.itemsArray){
          for(let res_item of response){
            if(item.termek_id == res_item.id) {
              item.etterem_id = res_item.etterem_id;
              item.nev = res_item.nev;
              break;
            }
          }
        }
      });
    }

  }
}
