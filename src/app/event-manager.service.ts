import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventPreview } from '../models/EventPreview';
import { Event } from '../models/Event';

const API_URL = 'https://hidden-garden-36045.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  constructor(private http: HttpClient) { }

  getAllVerifiedEvents(page: number, perPage: number): Observable<EventPreview[]>{
    return this.http.get<EventPreview[]>(`${API_URL}/event/verified?page=${page}&numfetched=${perPage}`);
  }
  
  getAllUnverifiedEvents(page: number, perPage: number): Observable<EventPreview[]>{
    return this.http.get<EventPreview[]>(`${API_URL}/event/unverified?page=${page}&numfetched=${perPage}`);
  }

  getEventById(id: string): Observable<Event>{
    return this.http.get<Event>(`${API_URL}/event/event?id=${id}`);
  }

  updateEvent(id: string, event: Event): Observable<Event>{
    console.log('Saving Team');
    console.log(event);
    return this.http.patch<Event>(`${API_URL}/event/newEvent?id=${id}`, event);
  }

  createNewEvent(event: Event): Observable<Event>{
    return this.http.post<Event>(`${API_URL}/event/newEvent`, event);
  }

}
