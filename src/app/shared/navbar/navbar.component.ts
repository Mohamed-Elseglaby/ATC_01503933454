import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../Services/auth.service';
const element = document.querySelector('html');
@Component({
  selector: 'app-navbar',
  imports: [ButtonModule,CardModule,CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDropdownOpen: boolean = true;
  isAuthorized!: boolean;
  isMenuOpen: boolean = false;
  isDarkMode!: boolean;
  isAdmin!:boolean;
  constructor(private authServ:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('theme')==='dark';
    if(this.isDarkMode){
      element?.classList.add('my-app-dark')
    }
    else{
      element?.classList.remove('my-app-dark')
    }
    this.isAuthorized = this.authServ.isLoggend()
    this.isAdmin = localStorage.getItem('role') === 'admin'
  }
  toggleDarkTheme(){
      element?.classList.toggle('my-app-dark');
      this.isDarkMode = !this.isDarkMode;
      localStorage.getItem('theme')==='dark'?localStorage.setItem('theme','light'):localStorage.setItem('theme','dark')
  }
  logout(){
    this.authServ.logout()
    this.router.navigate(['./login'])
  }
}
