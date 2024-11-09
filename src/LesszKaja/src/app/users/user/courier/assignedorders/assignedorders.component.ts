import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignedorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignedorders.component.html',
  styleUrl: './assignedorders.component.scss'
})
export class AssignedordersComponent {

  assignedOrders: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
    this.getAssignedOrders();
  }

  
  getAssignedOrders() {
    const futaridStr = localStorage.getItem('id');
    if (futaridStr !== null) {
      const futarid = parseInt(futaridStr, 10);
      if (!isNaN(futarid)) {
        this.http.post<any[]>('http://localhost:3000/courier/assigned', { futarid })
          .subscribe(data => {
            this.assignedOrders = data;
            console.log('Assigned Orders:', data);
          }, error => {
            console.error('Error fetching assigned orders:', error);
          });
      }
    }
  }
  
  
}
