import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input('activeSection') activeSection: BehaviorSubject<any>;

  currentSection:string;
  
  @Output() sectionEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.activeSection.subscribe(res=>{
      this.currentSection = res;
    })
  }

  changeSection(section:string){
    this.sectionEvent.emit(section);
    this.currentSection = section;
  }

}
