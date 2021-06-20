import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentSection:string;
  
  @Output() sectionEvent = new EventEmitter<string>();

  constructor(
    private helperService:HelperService
  ) { }

  ngOnInit() {
    this.getCurrentSection();
  }

  getCurrentSection(){
    this.helperService.getCurrentSection().subscribe((res:string)=>{
      this.currentSection = res;
    })
  }

  changeSection(section:string){
    this.sectionEvent.emit(section);
    this.currentSection = section;
    this.helperService.setCurrentSection(this.currentSection);
  }

}
