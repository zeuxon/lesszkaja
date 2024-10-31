import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VisitorComponent } from './users/visitor/visitor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './users/visitor/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VisitorComponent, NavbarComponent, RegisterComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'LesszKaja';

}
