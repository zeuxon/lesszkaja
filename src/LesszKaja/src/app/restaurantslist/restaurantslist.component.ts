import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurantslist',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule, ListComponent, RouterModule, FormsModule],
  templateUrl: './restaurantslist.component.html',
  styleUrls: ['./restaurantslist.component.scss'],
})
export class RestaurantslistComponent implements OnInit {
  ettermekArray: Array<{id: number, nev: string; cim: string; route: string, image: string, eteltipusok?: { nev: string }[]}> = [];
  shownEttermek: Array<{id: number, nev: string; cim: string; route: string, image: string, eteltipusok?: { nev: string }[]}> = [];
  searchValue: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("/api/restaurants-with-foodtypes").subscribe((response: any) => {
      this.loadEttermek(response);
      this.shownEttermek = this.ettermekArray.slice();
    });
  }

  loadEttermek(ettermek: any) {
    this.ettermekArray = ettermek.map((etterem: any) => {
      return {
        id: etterem.id,
        nev: etterem.nev,
        cim: etterem.cim,
        route: "/restaurants/" + etterem.id,
        image: etterem.image ? `../../assets/images/restaurantprofiles/${etterem.image}` : "../../assets/images/restaurantprofiles/mcdonalds.png",
        eteltipusok: etterem.eteltipusok || []  
      };
    });
  }

  search() {
    this.shownEttermek = this.ettermekArray.filter(it => 
      it.nev.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
