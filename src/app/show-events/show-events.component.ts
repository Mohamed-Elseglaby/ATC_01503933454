import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { EventsService } from '../Services/events.service';
import { EventDetails } from '../Models/event-details';
@Component({
  selector: 'app-show-events',
  imports: [TableModule, CommonModule],
  templateUrl: './show-events.component.html',
  styleUrl: './show-events.component.css',
  providers:[EventsService]
})
export class ShowEventsComponent implements OnInit{
events!:EventDetails[]
constructor(private eventServ:EventsService){}
  ngOnInit(){
    this.eventServ.getAll().subscribe({
      next:(res)=>{
        this.events = res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
