import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent implements OnInit {
  restaurantData = {
    name: "",
    cim: "",
    route: "",
  }

  termekekArray: Array<{ nev: string; alapar: string, route: string}> = [];

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.restaurantData.route = "/restaurants/"  + this.restaurantData.name + "/" + this.restaurantData.cim;
    this.http.get("http://localhost:3000/restaurants/" + this.restaurantData.name + "/" + this.restaurantData.cim).subscribe(response => {
      this.loadTermekek(response);
    });
  }

  loadTermekek(termekek: any) {
    for (let index = 0; index < termekek.length; index++) {
      this.termekekArray[index] = {nev: "", alapar: "", route: ""};
      this.termekekArray[index].nev = termekek[index].nev;
      this.termekekArray[index].alapar = termekek[index].alapar;
      this.termekekArray[index].route = this.restaurantData.route + "/" + termekek[index].nev;
    }
  }

  @Input()
  set nev(restaurantName: string) {
    this.restaurantData.name = restaurantName;
  }

  @Input()
  set cim(restaurantAddress: string) {
    this.restaurantData.cim = restaurantAddress;
  }
}
