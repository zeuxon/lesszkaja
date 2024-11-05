import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent {
  restaurantData = {
    name: "",
    cim: "",
  }

  constructor(){

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
