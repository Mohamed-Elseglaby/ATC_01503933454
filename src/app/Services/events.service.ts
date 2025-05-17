import { Injectable } from '@angular/core';
import { EventDetails } from '../Models/event-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const events = [
{
    _id: 5,
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
const api = 'https://areeb-back-2025.vercel.app/api'
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }

  getAll():Observable<EventDetails[]>{
    return this.http.get<EventDetails[]>(`${api}/events`)
  }
  getEvent(id:string|null):Observable<EventDetails>{
    return this.http.get<EventDetails>(`${api}/events/${id}`)
  }
  addEvent(newevent:EventDetails):Observable<EventDetails>{
    return this.http.post<EventDetails>(`${api}/events`,newevent)
  }
  updateEvent(id:string,newevent:EventDetails):Observable<EventDetails>{
    return this.http.put<EventDetails>(`${api}/events/${id}`,newevent)
  }
  Delete(id:string){
    return this.http.delete<EventDetails>(`${api}/events/${id}`)
  }
}
