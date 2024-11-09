import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, etc.
import { AssignedordersComponent } from './assignedorders/assignedorders.component';
import { UnassignedordersComponent } from './unassignedorders/unassignedorders.component';

@Component({
  selector: 'app-courier',
  standalone: true,
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.scss'],
  imports: [CommonModule, HttpClientModule, AssignedordersComponent, UnassignedordersComponent] // Import HttpClientModule here
})
export class CourierComponent  {
  
}
