import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './shared/loader/loader.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,NavbarComponent,CommonModule,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVENT STORE';
  constructor(private router:Router){}
  isClear():boolean{
    return !['/dashboard','/dashboard/add','/register','/login'].includes(this.router.url);
  }
}
