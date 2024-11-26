import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SourceTextModule } from 'vm';
import { CartManagerService } from '../services/cartmanager.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  utanvetOpcio = true;

  constructor(private http: HttpClient, private router: Router, private cartManager: CartManagerService){

  }

  radioStateChange(opcio: String): void{
    if(opcio === 'utanvet') {
      this.utanvetOpcio = true
    }else{
      this.utanvetOpcio = false;
    }
  }

  onSubmit(orderForm: any): void{
    //Valamiért a formban nincs benne a kártyaszám?
    this.router.navigate(["/cart"], {queryParams: {succes: true}}) //Ez sem működik a routeguard miatt majd valamikor fixelve lesz :-)

    this.http.post('/api/order', {email: localStorage.getItem("emailcim"), adat: localStorage.getItem("kosar")}).subscribe(response => {

      localStorage.removeItem("kosar");
    });

    
  }
}
