import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-unassignedorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unassignedorders.component.html',
  styleUrls: ['./unassignedorders.component.scss']
})
export class UnassignedordersComponent {
  unassignedOrders: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUnassignedOrders();
  }

  getUnassignedOrders() {
    const futaridStr = localStorage.getItem('id');
    if (futaridStr !== null) {
      const futarid = parseInt(futaridStr, 10);
      if (!isNaN(futarid)) {
        this.http.post<any[]>('http://localhost:3000/courier/unassigned', { futarid }).subscribe({
          next: (orders) => {
            this.unassignedOrders = orders;
          },
          error: (error) => {
            console.error('Error fetching unassigned orders:', error);
          }
        });
      }
    }
  }
  

  assignOrder(orderId: number): void {
    const futaridStr = localStorage.getItem('id');
    if (!futaridStr) {
      console.error('Courier ID not found in local storage');
      return;
    }

    const futarid = parseInt(futaridStr, 10);
    if (isNaN(futarid)) {
      console.error('Invalid courier ID');
      return;
    }

    console.log('Assigning order...', orderId, futarid);

    this.http.post('http://localhost:3000/courier/assign', { orderId, futarid })
      .subscribe({
        next: (response) => {
          console.log('Order assigned successfully', response);
          this.getUnassignedOrders();
        },
        error: (error) => {
          console.error('Error assigning order:', error);
        }
      });
  }
  
    
}
