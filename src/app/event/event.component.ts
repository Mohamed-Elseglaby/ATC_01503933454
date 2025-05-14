import { Component, Input } from '@angular/core';
import { EventDetails } from '../Models/event-details';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event',
  imports: [ButtonModule,RouterLink],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
@Input() event:EventDetails = {id:0,title:"Event Title",date:"May 30",location:"Alexandria",time:"09:00AM"}
}
