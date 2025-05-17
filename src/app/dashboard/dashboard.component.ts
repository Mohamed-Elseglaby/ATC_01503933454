import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventsService } from '../Services/events.service';
import { EventDetails } from '../Models/event-details';
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule,AddEventComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  ngOnInit(): void {

    }
}
