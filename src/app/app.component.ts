import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'areeb-task';
  constructor(private router:Router){}
  isClear():boolean{
    return !['/dashboard','/dashboard/add','/register','/login'].includes(this.router.url);
  }
}
