import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifycost',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './modifycost.component.html',
  styleUrls: ['./modifycost.component.scss'],
})
export class ModifycostComponent implements OnInit {
  constructor(private http: HttpClient) {}

  email = localStorage.getItem('emailcim'); // Static address
  products: Array<{ id: number; alapar: number; nev: string; etterem_cim: string; modifiedValue?: number }> = [];

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http
      .get<Array<{ id: number; alapar: number; nev: string; etterem_cim: string }>>(
        `/api/storage_get_products?etteremEmail=${this.email}`
      )
      .subscribe(
        (data) => {
          console.log('Products fetched:', data);
          // Initialize modifiedValue as undefined to ensure placeholder shows
          this.products = data.map((product) => ({
            ...product,
            modifiedValue: undefined, // Remove initial cost in the input field
          }));
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
  }

  modifyCost(productId: number, newCost: number | undefined): void {
    if (newCost == null || newCost < 0) {
      console.error('Invalid cost value.');
      return;
    }

    this.http
      .post('/api/modifyitem', {
        id: productId,
        value: newCost,
      })
      .subscribe(
        (response) => {
          console.log(`Product ID ${productId} cost modified to ${newCost}`, response);
          this.fetchProducts();
        },
        (error) => {
          console.error('Modify cost error:', error);
        }
      );
  }
}
