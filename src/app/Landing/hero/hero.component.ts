import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { EventDetails } from '../../Models/event-details';
import { EventsService } from '../../Services/events.service';
import { EventsListComponent } from '../../events-list/events-list.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '../../Services/booking.service';
import { TagModule } from 'primeng/tag';
import { Booking } from '../../Models/booking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [ButtonModule,CarouselModule,EventsListComponent,RouterLink,TagModule,CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  providers:[HttpClient]
})
export class HeroComponent implements OnInit {
  events: EventDetails[]=[];
  bookedtickets:Booking[]=[]
  constructor(private eventsServ:EventsService,private router:Router,private BookingServ:BookingService){
  }
  book(id:number){
    this.router.navigate(['/event',id])
  }
  ngOnInit(): void {
      this.eventsServ.getAll().subscribe((data)=>{
      this.events =data;
      this.BookingServ.getMyBookings().subscribe({
        next:(res)=>{
          this.bookedtickets = res
          console.log(this.bookedtickets)
        },
        error:()=>{
          console.log("err")
        }
      })
      console.log(this.events)
    })
  }
      loadBookings(){
      this.BookingServ.getMyBookings().subscribe((res)=>{
        this.bookedtickets = res;
                  console.log(this.bookedtickets)

      }
    )
    }
    isBooked(id:string|undefined):boolean{
      return this.bookedtickets.some((a)=>{
        return a.event._id === id
      }) 
    }
}
