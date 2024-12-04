import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-ingredient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-ingredient-list.component.html',
  styleUrl: './products-ingredient-list.component.scss'
})
export class ProductsIngredientListComponent {
  @Input() products_ingredients: Array<{ nev: string, osszetevok: string, alapanyag: string; }> = [];


}
