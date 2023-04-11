import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private triggerChildSource = new Subject<void>();

  triggerChild$ = this.triggerChildSource.asObservable();

  triggerChildFunction(): void {
    this.triggerChildSource.next();
  }
}
