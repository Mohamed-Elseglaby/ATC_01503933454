import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { EventDetails } from '../../Models/event-details';

@Component({
  selector: 'app-hero',
  imports: [ButtonModule,CarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  events: EventDetails[]=[{
    id: 1,
    title:'Boom Room Turns 1 Featuring Sharmoofers and Surprise Guests',
    time:'09:00PM',
    date:'May 30',
    location:'Boom Room, Open Air Mall, Madinaty'
},
{
    id: 1,
    title:'Boom Room Turns 1 Featuring Sharmoofers and Surprise Guests',
    time:'09:00PM',
    date:'May 30',
    location:'Boom Room, Open Air Mall, Madinaty'
},
{
    id: 1,
    title:'Boom Room Turns 1 Featuring Sharmoofers and Surprise Guests',
    time:'09:00PM',
    date:'May 30',
    location:'Boom Room, Open Air Mall, Madinaty'
},];

  ngOnInit(): void {

  }

}
