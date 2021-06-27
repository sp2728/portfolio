import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentSection:string;

  navbarOpen:boolean=false;

  @ViewChild('navList', {static:false}) navList:ElementRef;

  @ViewChild('navButton', {static:false}) navButton:ElementRef;

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


  toggleMenu(){
    this.navbarOpen = !this.navbarOpen;
    if(this.navbarOpen){
      this.navList.nativeElement.classList.add('mobile-open');
      this.navButton.nativeElement.classList.add('open');
    }
    else{
      this.navList.nativeElement.classList.remove('mobile-open');
      this.navButton.nativeElement.classList.remove('open');
    }

  }



}
