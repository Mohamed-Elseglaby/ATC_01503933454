import { Component, Input, OnInit } from '@angular/core';
import { EventComponent } from '../event/event.component';
import { EventDetails } from '../Models/event-details';
import { CommonModule } from '@angular/common';
import { Booking } from '../Models/booking';
import { BookingService } from '../Services/booking.service';
@Component({
  selector: 'app-events-list',
  imports: [EventComponent,CommonModule],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent implements OnInit{
@Input() events!: EventDetails[]
myEvents:EventDetails[]=this.events
bookedtickets:Booking[]=[]
constructor(private bookingServ:BookingService){}
  ngOnInit(): void {
    this.bookingServ.getMyBookings().subscribe({
      next:(res)=>{
        this.bookedtickets = res
      }
    })
  }
isBooked(id:string|undefined):boolean{
  return this.bookedtickets.some((a)=>{
    return a.event._id === id
  }) 
}
}
