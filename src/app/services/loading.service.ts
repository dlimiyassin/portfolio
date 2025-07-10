// loading.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(true);
  loading$ = this.loadingSubject.asObservable();

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }

  private remindUser = new BehaviorSubject<boolean>(true);
  remindeUser$ = this.remindUser.asObservable();

  setReminder(reminder: boolean) {
    this.remindUser.next(reminder);
  }

  getreminder(){
    return this.remindUser.value
  }
}
