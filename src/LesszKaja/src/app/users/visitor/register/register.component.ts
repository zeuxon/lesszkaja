import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  // constructor(private http: HttpClient) {}

  // onSubmit(form: any) {
  //   this.http.post('http://localhost:4200/register', form.value)
  //     .subscribe(response => {
  //       console.log('Registration successful', response);
  //     }, error => {
  //       console.error('Registration failed', error);
  //     });
  // }
}
