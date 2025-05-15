import { Component, Input } from '@angular/core';
import { EventComponent } from '../event/event.component';
import { EventDetails } from '../Models/event-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-list',
  imports: [EventComponent,CommonModule],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
@Input() events!: EventDetails[]
myEvents:EventDetails[]=this.events

}
