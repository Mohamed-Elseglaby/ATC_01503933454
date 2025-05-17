import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { EventsService } from '../Services/events.service';
import { EventDetails } from '../Models/event-details';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditEventComponent } from '../edit-event/edit-event.component';
@Component({
  selector: 'app-show-events',
  imports: [TableModule, CommonModule,ButtonModule,ConfirmPopupModule,ToastModule],
  templateUrl: './show-events.component.html',
  styleUrl: './show-events.component.css',
  providers:[EventsService,MessageService,ConfirmationService,DialogService]
})
export class ShowEventsComponent implements OnInit{
events!:EventDetails[]
ref: DynamicDialogRef | undefined;
constructor(private eventServ:EventsService,private messageService:MessageService,private confirmationService:ConfirmationService,public dialogService: DialogService,
){
}
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
  delete(event: Event,id:string) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this Event?',
            icon: 'pi pi-info-circle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Delete',
                severity: 'danger'
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Event deleted', life: 3000 });
                this.Delete(id)
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
    Delete(id:string){
      this.eventServ.Delete(id).subscribe({
        next:()=>{
          console.log("Deleted")
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
    show(id:string) {
        this.ref = this.dialogService.open(EditEventComponent, {
            header: 'Select a Product',
            data: {
                id: id
            },
            width: '50vw',
            modal:true,
            closable:true,
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
        });
        this.ref.onClose.subscribe((res)=>{
          this.ngOnInit()
        })
      }
}
