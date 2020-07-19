import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  loaderVisibility: BehaviorSubject<boolean>;

  constructor() {
    this.loaderVisibility = new BehaviorSubject(false);
  }

  showLoader(state: boolean): void {
    this.loaderVisibility.next(state);
  }

  getLoaderState(): Observable<boolean> {
    return this.loaderVisibility.asObservable();
  }
}
