import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventsService } from '../Services/events.service';
import { EventDetails } from '../Models/event-details';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  eventForm!: FormGroup;
  events!:EventDetails[];
  constructor(public eventServ: EventsService, private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      grade: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.events = this.eventServ.getAll()
  }
  addEvent(){

  }
}
