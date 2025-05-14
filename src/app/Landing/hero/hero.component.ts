import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { EventDetails } from '../../Models/event-details';
import { EventsService } from '../../Services/events.service';
import { EventsListComponent } from '../../events-list/events-list.component';

@Component({
  selector: 'app-hero',
  imports: [ButtonModule,CarouselModule,EventsListComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  events: EventDetails[]=[];
  constructor(private eventsServ:EventsService){
    this.events= this.eventsServ.getAll()
  }
  ngOnInit(): void {}

}
