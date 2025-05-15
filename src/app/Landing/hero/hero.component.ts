import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { EventDetails } from '../../Models/event-details';
import { EventsService } from '../../Services/events.service';
import { EventsListComponent } from '../../events-list/events-list.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [ButtonModule,CarouselModule,EventsListComponent,RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  events: EventDetails[]=[];
  constructor(private eventsServ:EventsService,private router:Router){
    this.events= this.eventsServ.getAll()
  }
  book(id:number){
    this.router.navigate(['/event',id])
  }
  ngOnInit(): void {}

}
