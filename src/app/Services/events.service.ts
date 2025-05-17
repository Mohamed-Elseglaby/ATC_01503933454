import { Injectable } from '@angular/core';
import { EventDetails } from '../Models/event-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const events = [{
    id: 1,
    title:'Boom Room Turns 1 Featuring Sharmoofers and Surprise Guests',
    time:'09:00PM',
    date:'May 30',
    location:'Boom Room, Open Air Mall, Madinaty',
    cost:500,
    Category:'music',
    Description:"Best concert in The MENA Region",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.487138831378!2d31.630418823322294!3d30.10887117489122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581d0076c628fd%3A0x79a9352dd30a2613!2sBoom%20Room!5e0!3m2!1sar!2seg!4v1747310203742!5m2!1sar!2seg",
    img:'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/41b7b12c4712eb5f157f6b635c157241.jpg'
},
{
    id: 2,
    title:'“Tetrat w Zekrayat” Ali Elhaggar - Second Edition',
    time:'09:00PM',
    date:'May 22',
    location:'Theator Arkan',
    img:'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/1bd3b6a6cec53bd2f28f01a39f5733ab.jpg',
    cost:850,
    Category:'music',
    Description:"Best concert in The MENA Region",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.487138831378!2d31.630418823322294!3d30.10887117489122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581d0076c628fd%3A0x79a9352dd30a2613!2sBoom%20Room!5e0!3m2!1sar!2seg!4v1747310203742!5m2!1sar!2seg"
},
{
    id: 3,
    title:'SECRET DEBATE CLUB',
    time:'08:00PM',
    date:'May 23',
    location:'El Rihany Theater',
    cost:600,
    Category:'Comedy',
    Description:"Best Comedy Show in The MENA Region",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.487138831378!2d31.630418823322294!3d30.10887117489122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581d0076c628fd%3A0x79a9352dd30a2613!2sBoom%20Room!5e0!3m2!1sar!2seg!4v1747310203742!5m2!1sar!2seg",
    img:'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/2d4906f1dbf1a2bd7d9ec18469345791.png'
},
{
    id: 4,
    title:'Adam Port',
    time:'09:00PM',
    date:'May 30',
    location:'The Green River-New Capital',
    cost:150,
    Category:'General',
    Description:"Best Comedy Show in The MENA Region",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.487138831378!2d31.630418823322294!3d30.10887117489122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581d0076c628fd%3A0x79a9352dd30a2613!2sBoom%20Room!5e0!3m2!1sar!2seg!4v1747310203742!5m2!1sar!2seg",
    img:'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/435b6c4d8ab633e75b1b07bb05af24cc.png'
},
{
    id: 5,
    title:'Cinema Radio',
    time:'10:00AM',
    date:'May 30',
    location:'The Green River-New Capital',
    cost:500,
    Category:'General',
    Description:"Best Comedy Show in The MENA Region",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.487138831378!2d31.630418823322294!3d30.10887117489122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581d0076c628fd%3A0x79a9352dd30a2613!2sBoom%20Room!5e0!3m2!1sar!2seg!4v1747310203742!5m2!1sar!2seg",
    img:'https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/b3459e7c3f2323ec59097c3180c247c2.jpg'
},
]
const api = 'https://areeb-back-2025-6oqm.vercel.app/api'
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }

  getAll():Observable<EventDetails[]>{
    return this.http.get<EventDetails[]>(`${api}/events`)
  }
  addEvent(newevent:EventDetails):Observable<EventDetails>{
    return this.http.post<EventDetails>(`${api}/events`,newevent)
  }
  getEvent(id:number){
    return events[id-1]
  }
  add(newevent:EventDetails){
    events.push(newevent);
  }
  update(id:number,newevent:EventDetails){
    events[id] =newevent;
  }
  Delete(id:number,newevent:EventDetails){
    return events.splice(id,1);
  }
}
