import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-navbar',
  imports: [ButtonModule,CardModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleDarkTheme(){
    const element = document.querySelector('html');
    if(element){
      element.classList.toggle('my-app-dark');
    }
  }
}
