import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { PRIMARY_OUTLET, Router, RouterLink, UrlSegment, UrlSegmentGroup } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {
  termekData = {
    parentroute: "",
    nev: ""
  }

  extraArray: Array<String> = [];

  constructor(private router: Router, private http: HttpClient){}

  addToCart(): void{
  }

  ngOnInit(): void {
    let segments: Array<UrlSegment> = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments;
    let url = "restaurantsitem/" + segments[1].path + "/" + segments[2].path + "/"+ segments[3].path;

    const ettermek = this.http.get("http://localhost:3000/" + url).subscribe((response: any) => {
      console.log(response);
      this.loadExtras(response);
    });
  }

  loadExtras(extras: any): void{
    for (let index = 0; index < extras.length; index++) {
      this.extraArray[index] = extras[index].nev;
      
    }
  }

  @Input()
  set termek(termek: string) {
    this.termekData.nev = termek;
  }
}
