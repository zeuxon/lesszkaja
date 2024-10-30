import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisitorComponent } from './users/visitor/visitor.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VisitorComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LesszKaja';
}
