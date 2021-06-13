import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input('activeSection') activeSection: BehaviorSubject<any>;

  currentSection:string;

  sidebarVisible:any;

  @Output() sectionEvent = new EventEmitter<string>();

  constructor(
    private helperService:HelperService
  ) { }

  ngOnInit() {
    this.activeSection.subscribe(res=>{
      console.log(res);
      this.currentSection = res;
    })

    this.getSidebarStatus();
  }

  getSidebarStatus(){
    this.helperService.getSidebarStatus().subscribe(res=>{
      this.sidebarVisible = res;
    })
  }

  changeSection(section:string){
    this.sectionEvent.emit(section);
    this.currentSection = section;
  }

  closeSideBar(){
    this.helperService.setSidebarStatus(false);
  }

}
