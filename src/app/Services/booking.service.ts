import { Injectable } from '@angular/core';
import { EventDetails } from '../Models/event-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const api = 'https://areeb-back-2025.vercel.app/api'
@Injectable({
  providedIn: 'root'
})
export class BookingService {  
  constructor(private http:HttpClient) { }

  bookTicket(eventId:string|null):Observable<any>{
    return this.http.post<any>(`${api}/bookings`,{EventID:eventId})
  }
  getMyBookings():Observable<any>{
        return this.http.get<any>(`${api}/bookings/user`)
  }
}
