import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SECTIONS } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  currentSection = new BehaviorSubject('profile');

  constructor() { }

  getCurrentSection(){
    return this.currentSection.asObservable();
  }

  setCurrentSection(section:string){
    this.currentSection.next(section);
  }

}
