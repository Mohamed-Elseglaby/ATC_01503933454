import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventDetails } from '../Models/event-details';
import { EventsService } from '../Services/events.service';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-add-event',
  imports: [ButtonModule,ReactiveFormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent implements OnInit{
  eventForm!: FormGroup;
  events!:EventDetails[];
  constructor(public eventServ: EventsService, private fb: FormBuilder) {

  }
  ngOnInit(): void {
      this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', [Validators.required]],
      time: ['', Validators.required],
      location: [''],
      cost: ['', Validators.required],
      Description: [''],
      Category: [''],
      map: [''],
      img: ['', Validators.required],
    });
  }

  onSubmit(){
    if(this.eventForm.valid){
      this.eventServ.addEvent(this.eventForm.value).subscribe({
        next:(res)=>{
          console.log("event added",res)
        },
        error:(err)=>{
          console.log("error")
        }
      })
    }
  }
}
