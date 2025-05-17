import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { EventDetails } from '../../Models/event-details';
import { EventsService } from '../../Services/events.service';
import { EventsListComponent } from '../../events-list/events-list.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  imports: [ButtonModule,CarouselModule,EventsListComponent,RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  providers:[HttpClient]
})
export class HeroComponent implements OnInit {
  events: EventDetails[]=[];
  constructor(private eventsServ:EventsService,private router:Router){
  }
  book(id:number){
    this.router.navigate(['/event',id])
  }
  ngOnInit(): void {
      this.eventsServ.getAll().subscribe((data)=>{
      this.events =data;
      console.log(this.events)
    })
  }

}
