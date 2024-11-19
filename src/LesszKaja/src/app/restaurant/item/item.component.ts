import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { PRIMARY_OUTLET, Route, Router, RouterLink, UrlSegment, UrlSegmentGroup } from '@angular/router';
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
    nev: "",
    //cim: ""
  }

  alreadyExists = false;

  extraArray = new Map<String, boolean>();

  constructor(private router: Router, private http: HttpClient, private cartManager: CartManagerService){}

  addToCart(): void{
    let params: any = this.router.routerState.snapshot.root.queryParams;
    console.log(params);
    if(params.modifying == "true"){
      let shouldNavigate = this.cartManager.modifyItem(params.index, this.termekData.id, this.extraArray);
      this.alreadyExists = !shouldNavigate;

      if(shouldNavigate) this.router.navigateByUrl("/cart");
      return;
    }

    this.cartManager.addToCart(this.termekData.id, this.extraArray);
    this.router.navigateByUrl(this.termekData.parentroute);
  }

  changeChoice(extra: any){
    this.extraArray.set(extra, !this.extraArray.get(extra))
  }

  ngOnInit(): void {
    let segments: Array<UrlSegment> = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments;
    this.termekData.parentroute = "/restaurants/" + segments[1].path;
    //this.termekData.cim = this.router.url;
    let etterem_id = segments[1].path + "/" + this.termekData.id;

    //console.log(this.router.url);

    const termek_nev = this.http.post("/api/getname", {etterem_id: etterem_id, termek_id: this.termekData.id}).subscribe((response: any) => {
      this.termekData.nev = response[0].nev;
    });

    const ettermek = this.http.post("/api/restaurantsitem", {etterem_id: etterem_id, termek_id: this.termekData.id}).subscribe((response: any) => {
      if(response.length > 0){
        this.loadExtras(response);
      }
    });
  }

  loadExtras(extras: any): void{
    for (let index = 0; index < extras.length; index++) {
      this.extraArray.set(extras[index].nev, false);
    }
  }

  @Input()
  set termek_id(termekId: number) {
    this.termekData.id = termekId;
  }
}
