import { Component, Input } from '@angular/core';
import { EventDetails } from '../Models/event-details';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-event-detail',
  imports: [ButtonModule],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {
@Input() event:EventDetails = {id:0,title:"Event Title",date:"May 30",location:"Alexandria",time:"09:00AM",cost:900};
}
