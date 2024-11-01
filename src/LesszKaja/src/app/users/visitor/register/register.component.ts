import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

    constructor(private http: HttpClient) {}

    onSubmit(form: any) {
      const userData = {
        felhasznalonev: form.value.username,
        emailcim: form.value.email,
        jelszo: form.value.password,
        telefonszam: form.value.tel,
        lakcim: form.value.address,
        admine: false
      };

    
    this.http.post('http://localhost:3000/register', userData)
    .subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });


    }
}
