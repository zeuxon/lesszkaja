import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-restaurantslist',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule, ListComponent, RouterModule],
  templateUrl: './restaurantslist.component.html',
  styleUrl: './restaurantslist.component.scss'
})
export class RestaurantslistComponent implements OnInit {
  ettermekArray: Array<{ nev: string; cim: string; route: string}> = [];
  shownEttermek: Array<{ nev: string; cim: string; route: string}> = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const ettermek = this.http.get("http://localhost:3000/restaurants").subscribe(response => {
      this.loadEttermek(response);
      this.shownEttermek = this.ettermekArray.slice();
    });
  }

  loadEttermek(ettermek: any) {
    for (let index = 0; index < ettermek.length; index++) {
      this.ettermekArray[index] = {nev: "", cim: "", route: ""};
      this.ettermekArray[index].nev = ettermek[index].nev;
      this.ettermekArray[index].cim = ettermek[index].cim;
      this.ettermekArray[index].route = "/restaurants/" + ettermek[index].nev + "/" + ettermek[index].cim;
    }
  }

}
