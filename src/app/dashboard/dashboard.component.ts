import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventsService } from '../Services/events.service';
import { EventDetails } from '../Models/event-details';
import { AddEventComponent } from '../add-event/add-event.component';
import { ShowEventsComponent } from '../show-events/show-events.component';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule,AddEventComponent,ShowEventsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  ngOnInit(): void {

    }
}
