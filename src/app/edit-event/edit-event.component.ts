import { EventDetails } from './../Models/event-details';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { EventsService } from '../Services/events.service';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-edit-event',
  imports: [TableModule, CommonModule,ButtonModule,ConfirmPopupModule,ToastModule,ReactiveFormsModule],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css',
  providers:[EventsService,MessageService,ConfirmationService]
})
export class EditEventComponent implements OnInit{
  eventForm!: FormGroup;
  id:string = ''
  selected!:EventDetails;
  events!:EventDetails[];
  constructor(public eventServ: EventsService, private fb: FormBuilder,public config:DynamicDialogConfig,public ref:DynamicDialogRef) {
      this.id= config.data?.id

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
    this.eventServ.getEvent(this.id).subscribe({
      next:(res)=>{
        this.selected= res;
        console.log(res)
        this.eventForm.patchValue({
          title:res.title,
          date:res.date,
          time:res.time,
          location:res.location,
          cost:res.cost,
          Description: res.Description,
          Category: res.Category,
          map: res.map,
          img: res.img,
        })
      }
    })
  }

  onSubmit(){
    if(this.eventForm.valid){
        this.eventServ.updateEvent(this.selected._id,this.eventForm.value).subscribe({
            next:(res)=>{
              console.log(res);
              this.eventForm.reset();
              this.ref.close(res)
            },
            error:(err)=>{
              console.log("error",err)
            }
          })
    }
  }
}
