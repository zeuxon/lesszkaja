// src/app/restaurant/storage/storage.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClient and HttpClientModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent implements OnInit {
  constructor(private http: HttpClient) {} 

  address: string = 'Budapest, József körút 87.'; // Static address
  ingredients: any[] = [];
  products: any[] = [];
  remove_product?: string;

  ngOnInit(): void {
    this.fetchIngredients();
    this.fetchProducts();
  }

  fetchIngredients(): void {
    var data = this.http.get('http://localhost:3000/storage_get_ingredients').subscribe(
      (data: any) => {
        console.log('Data succesfully fetched:', data);
        this.ingredients = data;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  fetchProducts(): void {
    var data = this.http.get(`http://localhost:3000/storage_get_products?addr=${this.address}`).subscribe(
      (data: any) => {
        console.log('Data succesfully fetched:', data);
        this.products = data;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  removeProduct() {
    console.log('Remove product.');
    this.http.post('http://localhost:3000/remove_product', {name: this.remove_product}).subscribe(
      (response) => {
        console.log('Product succesfully deleted:', response);
        location.reload();
      }, 
      (error) => {
        console.error('Delete error:', error);
      }
    );
  }

  add_product_name?: string;
  add_product_value?: number;
  addProduct() {
    this.http.post('http://localhost:3000/add_product', {
      value: this.add_product_value, 
      name: this.add_product_name, 
      addr: this.address
    })
    .subscribe((response) => {
        console.log('Product succesfully added:', response);
        location.reload();
      }, 
      (error) => {
        console.error('Add error:', error);
      }
    );
  }

  
  
}
