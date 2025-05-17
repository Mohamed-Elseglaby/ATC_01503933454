import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventsService } from '../Services/events.service';
import { EventDetails } from '../Models/event-details';
import { AddEventComponent } from '../add-event/add-event.component';
import { ShowEventsComponent } from '../show-events/show-events.component';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule,AddEventComponent,ShowEventsComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  option:number = 1;
  constructor(private router:Router,private authServ:AuthService){}
    logout(){
    this.authServ.logout()
    this.router.navigate(['./login'])
  }
  home(){
    this.router.navigate(['/home'])
  }
}
