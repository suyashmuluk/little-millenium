import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private dataSubject = new BehaviorSubject<any>(true);
  data$ = this.dataSubject.asObservable();

  constructor() { }

  setState(data: boolean) {
    this.dataSubject.next(data);
  }
}
