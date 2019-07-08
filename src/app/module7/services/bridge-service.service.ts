import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeServiceService {
  private subject = new Subject<any>();

  constructor() { }

  getMethod(value) {
    this.subject.next(value);

  }

  sendMessage() {
    return this.subject.asObservable();
  }
}
