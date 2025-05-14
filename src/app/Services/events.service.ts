import { Injectable } from '@angular/core';
import { EventDetails } from '../Models/event-details';
const events = [{
    id: 1,
    title:'Boom Room Turns 1 Featuring Sharmoofers and Surprise Guests',
    time:'09:00PM',
    date:'May 30',
    location:'Boom Room, Open Air Mall, Madinaty',
    cost:500
},
{
    id: 1,
    title:'Boom Room Turns 1 Featuring Sharmoofers and Surprise Guests',
    time:'09:00PM',
    date:'May 30',
    location:'Boom Room, Open Air Mall, Madinaty',
    cost:200
},
{
    id: 1,
    title:'Boom Room Turns 1 Featuring Sharmoofers and Surprise Guests',
    time:'09:00PM',
    date:'May 30',
    location:'Boom Room, Open Air Mall, Madinaty',
    cost:300
},]
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getAll(){
    return events
  }
  getEvent(id:number){
    return events[id]
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
