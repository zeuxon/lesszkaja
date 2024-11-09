import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  termekData = {
    nev: ""
  }

  addToCart(): void{
    
  }

  @Input()
  set termek(termek: string) {
    this.termekData.nev = termek;
  }
}
