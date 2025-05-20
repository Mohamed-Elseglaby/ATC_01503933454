import { Component, Input, OnInit } from '@angular/core';
import { EventDetails } from '../Models/event-details';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  imports: [ButtonModule,RouterLink,TagModule,CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent{
  @Input() event:EventDetails = {_id:'ABC',title:"Event Title",date:"May 30",location:"Alexandria",time:"09:00AM",cost:250,Category:'music',Description:"Best concert in The MENA Region",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.487138831378!2d31.630418823322294!3d30.10887117489122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581d0076c628fd%3A0x79a9352dd30a2613!2sBoom%20Room!5e0!3m2!1sar!2seg!4v1747310203742!5m2!1sar!2seg",img:'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/41b7b12c4712eb5f157f6b635c157241.jpg'}
  @Input() isBooked:boolean = false
  selectedEvent:EventDetails = this.event;
  constructor(private router:Router){}
  book(){
    this.router.navigate(['/event',this.event._id])
  }
}
