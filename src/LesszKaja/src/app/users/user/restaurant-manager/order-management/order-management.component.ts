import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent {
  allOrders: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    const etteremEmail = localStorage.getItem('emailcim');
    console.log(etteremEmail);
    if (etteremEmail !== null) {
      this.http.post<any>('http://localhost:3000/ordermanagement', { etteremEmail }).subscribe({
        next: (orders) => {
          console.log(orders);  // Inspect the shape of the data returned
          if (Array.isArray(orders)) {
            this.allOrders = orders;
          } else {
            // Handle non-array response if necessary
            this.allOrders = orders.data || [];
          }
        },
        error: (error) => {
          console.error('Error fetching orders:', error);
        }
      });
      
    }
  }

  deleteOrder(orderId: number): void {
    console.log('Deleting order...', orderId);
    this.http.post('http://localhost:3000/ordermanagement/delete', { orderId }).subscribe({
      next: (response) => {
        console.log('Order deleted successfully', response);
        this.getAllOrders();
      },
      error: (error) => {
        console.error('Error deleting order:', error);
      }
    });
  }
}
