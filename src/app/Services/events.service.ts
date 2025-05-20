import { Injectable } from '@angular/core';
import { EventDetails } from '../Models/event-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
