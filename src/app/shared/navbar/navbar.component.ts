import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-navbar',
  imports: [ButtonModule,CardModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    isLangDropdownOpen: boolean = false;
  isDropdownOpen: boolean = true;
  currentLang: string = 'ع ر';
  isAuthorized!: boolean;
  isMenuOpen: boolean = false;
  isDarkMode!: boolean;
  
  private messageListener: any;

  constructor(

  ) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang= savedLang!;
  }
  ngOnInit(): void {

    
    // Define message listener
    this.messageListener = (event: MessageEvent) => {
      if (event.origin === window.location.origin && event.data?.type === 'auth-success') {
        console.log('Received auth success message');
        this.ngOnInit();
      }
    };
    
    // Add event listener
    window.addEventListener('message', this.messageListener);
  }
  
  ngOnDestroy(): void {

  }

  toggleLanguage(): void {
    if(this.currentLang!='en'){
      this.changeLang('en')
    } else {
      this.changeLang('ع ر')
    }
  }

  changeLang(language: "ع ر" | "en") {
    console.log(language)
  }
  toggleDarkTheme(){
    const element = document.querySelector('html');
    if(element){
      element.classList.toggle('my-app-dark');
    }
    
  }
}
