
import { Component, OnInit, inject } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import * as validator from "../../../../services/validators";

@Component({
  selector: 'app-modifyrestaurant',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './modifyrestaurant.component.html',
  styleUrl: './modifyrestaurant.component.scss'
})

export class ModifyrestaurantComponent implements OnInit {
  http = inject(HttpClient);
  restaurantsArray: Array<Restaurant> = [];
  dataSource = new MatTableDataSource<Restaurant>(this.restaurantsArray);
  columnsToDisplay = ['id', 'nev', 'emailcim', 'telefonszam', 'cim', 'felfuggesztve'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Restaurant | null;
  emptyForm = new FormGroup({});

  modifyRestaurants: Map<number, FormGroup> = new Map();

  ngOnInit(): void {
    this.http.get("http://localhost:3000/getrestaurants").subscribe((response: any) => {
      this.loadRestaurants(response);
      this.initializeFormGroups(response);
    });
  }

  deleteRestaurant(id:number) {
    this.http.delete("http://localhost:3000/deleterestaurant"+"/"+id).subscribe((response: any) => {
      this.http.get("http://localhost:3000/getrestaurants").subscribe((response: any) => {
        this.loadRestaurants(response);
        this.modifyRestaurants.delete(id);
        });
    })
  }

  suspendRestaurant(id:number,felfuggesztve:boolean) {
    this.http.post("http://localhost:3000/suspendrestaurant", {felfuggesztve:felfuggesztve,id : id}).subscribe((response: any) => {
      this.http.get("http://localhost:3000/getrestaurants").subscribe((response: any) => {
        this.loadRestaurants(response);
      });
    })
  }

  onButtonClick(restaurantId: number): void {
    console.log("Button clicked for restaurant with ID:", restaurantId);
    // Add your code here to handle the specific restaurant
  }

  initializeFormGroups(restaurants: any) {
    this.modifyRestaurants = new Map(
      restaurants.map((restaurant: any) => [
        restaurant.id,
        new FormGroup({
          nev: new FormControl("", [validator.modifyNameValidator()]),
          emailcim: new FormControl("", [validator.modifyStrictEmailValidator()]),
          telefonszam: new FormControl("", [validator.modifyPhoneValidator()]),
          cim: new FormControl("", [validator.modifyAddressValidator()]),
        })
      ])
    );
  }

  loadRestaurants(restaurants: any) {
    this.restaurantsArray = restaurants.map((restaurant: any) => ({
      id: restaurant.id,
      nev: restaurant.nev,
      emailcim: restaurant.emailcim,
      telefonszam: restaurant.telefonszam,
      cim: restaurant.cim,
      felfuggesztve: restaurant.felfuggesztve ? "igen" : "nem"
    }));
    this.dataSource.data = this.restaurantsArray;
  }

  toggleRow(element: Restaurant) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  restaurantFields: Array<keyof RestaurantData> = ['nev', 'emailcim', 'telefonszam', 'cim'];

  anyFieldHasValue(id:number): boolean {
    const form = this.modifyRestaurants.get(id)
    return form ? this.restaurantFields.some(field => !!form.get(field)?.value) : false;
  }

  restaurantTempModifyData: RestaurantData = {
    nev: "",
    emailcim: "",
    telefonszam: "",
    cim: "",
    id : 0
  };

  defaultData!: RestaurantData;
  isFormSubmitted: boolean = false;
  SuccessfulModify: boolean = true;
  OneFieldValid: boolean = true;



  onSubmit(element:any) {
    const restaurantForm = this.modifyRestaurants.get(element.id);
    if (restaurantForm) {


      const isFormValid = restaurantForm.valid;
      this.isFormSubmitted = false;


    if (this.anyFieldHasValue(element.id)) {
        this.isFormSubmitted = true;
        this.restaurantTempModifyData["id"]=element["id"];

        this.restaurantFields.forEach(field => {
          const control = restaurantForm.get(field);
          if (control && !control.value) {
            this.restaurantTempModifyData[field] = String(element[field]);
          } else {
            this.restaurantTempModifyData[field] = restaurantForm.controls[field].value
          }
        });
        this.http.post('http://localhost:3000/modifyrestaurantadmin', this.restaurantTempModifyData).subscribe(response => {
          console.log(this.restaurantTempModifyData)
          restaurantForm.reset({
            nev: '',
            email: '',
            telefonszam: '',
            cim: '',
          });
          restaurantForm.markAsPristine();
          restaurantForm.markAsUntouched();

          this.SuccessfulModify = true;
          this.http.get("http://localhost:3000/getrestaurants").subscribe((response: any) => {
          this.loadRestaurants(response);
          });
        }, error => {
          console.log(error);
          this.SuccessfulModify = false;
        });

      }
    }

  }




}

export interface Restaurant {
  id: number;
  nev: string;
  emailcim: string;
  telefonszam: string;
  cim: string;
  felfuggesztve: boolean;
}

interface RestaurantData {
  nev: string;
  emailcim: string;
  telefonszam: string;
  cim: string;
  id: string | number
}
