import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-registerothers',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './registerothers.component.html',
  styleUrl: './registerothers.component.scss'
})
export class RegisterothersComponent {

}
