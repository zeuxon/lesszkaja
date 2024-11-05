import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurantslist',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './restaurantslist.component.html',
  styleUrl: './restaurantslist.component.scss'
})
export class RestaurantslistComponent implements OnInit {
  ettermekArray: Array<{ nev: string; cim: string }> = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    //Nem mukodik :-DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
    const ettermek = this.http.get("http://localhost:3000/restaurantslist").subscribe(response => {
      this.loadEttermek(response);
    });
  }

  loadEttermek(ettermek: any) {
    for (let index = 0; index < ettermek.length; index++) {
      this.ettermekArray[index] = {nev: "", cim: ""};
      this.ettermekArray[index].nev = ettermek[index].nev;
      this.ettermekArray[index].cim = ettermek[index].cim;
    }
  }

}
