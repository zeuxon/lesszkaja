
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifycost',
  standalone: true,
  imports: [ CommonModule, FormsModule, HttpClientModule],
  templateUrl: './modifycost.component.html',
  styleUrls: ['./modifycost.component.scss'],
})
export class ModifycostComponent implements OnInit {
  constructor(private http: HttpClient) {}

  email = localStorage.getItem('emailcim'); // Static address
  products: Array<{ id: number; alapar: number; nev: string; etterem_cim: string; }> = [];
  modifyProductId?: number;
  modifyProductValue?: number;

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Array<{ id: number; alapar: number; nev: string; etterem_cim: string; }>>(`/api/storage_get_products?etteremEmail=${this.email}`).subscribe(
      (data) => {
        console.log('Products fetched:', data);
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  modifyCost(): void {
    if (this.modifyProductId == null || this.modifyProductValue == null) {
      console.error('Modify fields are incomplete.');
      return;
    }

    this.http.post('/api/storage_modify_product', {
      id: this.modifyProductId,
      value: this.modifyProductValue
    }).subscribe(
      (response) => {
        console.log('Product cost modified:', response);
        this.fetchProducts(); // Refresh the product list
      },
      (error) => {
        console.error('Modify cost error:', error);
      }
    );
  }
}