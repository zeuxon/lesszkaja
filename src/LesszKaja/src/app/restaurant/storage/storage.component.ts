// src/app/restaurant/storage/storage.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClient and HttpClientModule
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ProductsIngredientListComponent } from './products-ingredient-list/products-ingredient-list.component';
import { response } from 'express';

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ListComponent, ProductsIngredientListComponent],
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  email = localStorage.getItem('emailcim'); // Static address
  ingredients: any[] = [];
  products: Array<{ id: number; alapar: number; nev: string; etterem_cim: string; }> = [];
  remove_product: string = "";

  ngOnInit(): void {
    this.fetchIngredients();
    this.fetchProducts();
    this.fetchId();
    console.log(this.email);
  }

  restaurantId: number = 0;
  fetchId(): void {
    this.http.post<any>('/api/storage_get_id', { email: this.email }).subscribe(
      (response) => {
        this.restaurantId = response;
        console.log('Restaurant ID:', response);
        this.fetchComponents();
      },
      (error) => {
        console.error('Error fetching ID:', error);
      }
    );
  }
  

fetchIngredients(): void {
  var data = this.http.get(`/api/storage_get_ingredients?etteremEmail=${this.email}`).subscribe(
    (data: any) => {
      console.log('Data successfully fetched:', data);
      this.ingredients = data;
    },
    (error) => {
      console.log('Error', error);
    }
  );
}


fetchProducts(): void {
  this.http.get<Array<{ id: number; alapar: number; nev: string; etterem_cim: string; }>>(`/api/storage_get_products?etteremEmail=${this.email}`).subscribe(
    (data) => {
      console.log('Data successfully fetched:', data);
      this.products = data;
      this.get_components_ingredients();
    },
    (error) => {
      console.log('Error', error);
    }
  );
}

  // Termék törlése 
  removeProduct(remove_id: number) {
    console.log('Remove product.');
    this.http.post('/api/storage_remove_product', {name: remove_id}).subscribe(
      (response) => {
        console.log('Product succesfully deleted:', response);
        this.fetchProducts();
      },
      (error) => {
        console.error('Delete error:', error);
      }
    );
  }

  // Termék hozzáadása
  add_product_name?: string;
  add_product_value?: number;
  addProduct() {
    console.log(this.add_product_name);
    console.log(this.add_product_value);
    console.log(this.email);

    this.http.post('/api/storage_add_product', {
      value: this.add_product_value,
      name: this.add_product_name,
      email: this.email
    })
    .subscribe((response) => {
        console.log('Product succesfully added:', response);
        this.fetchProducts();
      },
      (error) => {
        console.error('Add error:', error);
      }
    );
  }

  // Termékek, összetevői, alapanyagai lekérdezés
  components_ingredients: Array<{ nev: string, osszetevok: string, alapanyag: string; }> = [];
  get_components_ingredients() {
    const product_names = this.products.map(product => product.nev);

    for (const it of product_names) {
      this.http.post<Array<{ nev: string, osszetevok: string, alapanyag: string; }>>(
        '/api/storage_get_products_ingredients', 
        {productName: it})
        .subscribe(
          (response) => {
            let a = response[0].nev;
            console.log('Data fetched successfully:', response);
            for (let i = 1; i < response.length; i++) {
              a = a.concat(", " + response[i].nev);
            }
            this.components_ingredients.push({
              nev: it,
              osszetevok: a,
              alapanyag: "" 
            });
            },
          (error) => {
            console.error('Error fetching data:', error);
          }
        );
    }
  }


  components_arr: Array<string> = [];
  fetchComponents() {
    this.http.post<Array<{ nev: string }>>('/api/storage_get_components', { id : this.restaurantId }).subscribe(
      (response) => {
        this.components_arr = response.map(item => item.nev);
        console.log('Restaurant components:', response);
      },
      (error) => {
        console.error('Error fetching components:', error);
      }
    );
  }
  
  product_name: string = "";
  component_name: string = "";
  //component_price: number = 0;
  component_unit: number = 1;
  addComponents() {
    this.http.post('/api/add-components', { p_name: this.product_name, c_name: this.component_name, unit: this.component_unit}).subscribe(
      (response) => {
        console.log('POST successful:', response);
        window.location.reload();
      },
      (error) => {
        console.error('Error making POST request:', error);
      }
    );
  }    
}
