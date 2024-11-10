import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { PRIMARY_OUTLET, Router, RouterLink, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { CartManagerService } from '../../services/cartmanager.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {
  termekData = {
    id: 0,
    parentroute: "",
    nev: ""
  }

  extraArray = new Map<String, boolean>();

  constructor(private router: Router, private http: HttpClient, private cartManager: CartManagerService){}

  addToCart(): void{
    this.cartManager.addToCart(this.termekData.id, this.extraArray);
    this.router.navigateByUrl(this.termekData.parentroute);
  }

  changeChoice(extra: any){
    this.extraArray.set(extra, !this.extraArray.get(extra))
  }

  ngOnInit(): void {
    
    let segments: Array<UrlSegment> = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments;
    this.termekData.parentroute = "/restaurants/" + segments[1].path + "/" + segments[2].path;
    let url = "restaurantsitem/" + segments[1].path + "/" + segments[2].path + "/"+ segments[3].path;

    const ettermek = this.http.get("http://localhost:3000/" + url).subscribe((response: any) => {
    this.termekData.id = response.id;
    if(response.results.length > 0) this.loadExtras(response.results);
    });
  }

  loadExtras(extras: any): void{
    for (let index = 0; index < extras.length; index++) {
      this.extraArray.set(extras[index].nev, false);
    }
  }

  @Input()
  set termek(termek: string) {
    this.termekData.nev = termek;
  }
}
