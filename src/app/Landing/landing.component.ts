import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  imports: [HeroComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  providers:[HttpClient]
})
export class LandingComponent {

}
