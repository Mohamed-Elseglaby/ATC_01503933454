import { EventDetails } from "./event-details";

export interface Booking {
    _id:string,
    EventID:string,
    event:EventDetails 
}
