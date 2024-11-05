import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';


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
  }

  termekekArray: Array<{ nev: string; alapar: string }> = [];


  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/restaurant/" + this.restaurantData.cim + "/" + this.restaurantData.name).subscribe(response => {
      this.loadTermekek(response);
    });
  }

  loadTermekek(termekek: any) {
    for (let index = 0; index < termekek.length; index++) {
      this.termekekArray[index] = {nev: "", alapar: ""};
      this.termekekArray[index].nev = termekek[index].nev;
      this.termekekArray[index].alapar = termekek[index].alapar;
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
