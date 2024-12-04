import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-orderhistory',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent {
  orders: Array<{ datum: string; osszar: number; kiszallitva: boolean; etterem_cim: string }> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const email = localStorage.getItem('emailcim');
    if (email) {
      this.fetchOrderHistory(email);
    } else {
      console.error('Email not found in localStorage');
    }
  }

  fetchOrderHistory(email: string): void {
    const body = { emailcim: email };
  
    // Ensure the endpoint is correct (it should be your backend URL, not frontend)
    this.http.post<Array<{ datum: string; osszar: number; kiszallitva: boolean; etterem_cim: string }>>('/api/orderhistory', body)
      .subscribe(
        (data) => {
          console.log('Order history fetched:', data);
          this.orders = data;
        },
        (error) => {
          console.error('Error fetching order history:', error);
        }
      );
  }
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
}
