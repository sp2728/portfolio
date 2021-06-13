import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  sidebarVisible = new Subject();

  constructor() { }

  setSidebarStatus(status:boolean){
    this.sidebarVisible.next(status);
  }

  getSidebarStatus(){
    return this.sidebarVisible.asObservable();
  }
}
