// src/app/restaurant/storage/storage.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClient and HttpClientModule

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Include HttpClientModule here
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent implements OnInit {
  constructor(private httpClient: HttpClient) {} // Inject HttpClient if using it

  address: string = 'Budapest, József körút 87.'; // Static address
  storages: any[] = [];

  ngOnInit(): void {
    this.fetchStorages();
  }

  fetchStorages(): void {
    const address = 'Budapest, József körút 87.'; // Static address
    const encodedAddress = encodeURIComponent(address);
  
    this.httpClient.get<any[]>(`http://localhost:3000/storage?address=${encodedAddress}`).subscribe(
      (data) => {
        this.storages = data;
      },
      (error) => {
        console.error('Error fetching storages', error);
      }
    );
  }
  
  
}
