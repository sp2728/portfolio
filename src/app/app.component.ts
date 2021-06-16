import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from './services/helper.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0}),
            animate('0.5s ease-out', 
                    style({ width: 500}))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ width: 500 }),
            animate('0.5s ease-in', 
                    style({ width: 0}))
          ]
        )
      ]
    )
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Portfolio';

  sidebarVisible:any =true;

  currentSection: BehaviorSubject<String> = new BehaviorSubject('profile');

  sections = ['profile', 'technologies', 'blogs', 'projects', 'education', 'contact']
  
  constructor(
    private helperService:HelperService,
    private _snackBar:MatSnackBar
    ) {
  }

  ngOnInit() {
    this.getSidebarStatus();
    document.getElementById('main').addEventListener('scroll', () => {
      this.keepTrack();
    })
    
    this._snackBar.open('Website is under development','OK', {
      verticalPosition: 'top'
    })
  }

  getSidebarStatus(){
    this.helperService.getSidebarStatus().subscribe(res=>{
      this.sidebarVisible = res;
    })
  }

  changeSection(section: string) {
    let element = document.getElementById(section);
    element.scrollIntoView({behavior:'smooth', block: "start", inline: "nearest"})
  }

  keepTrack() {
    const viewHeight = window.innerHeight;
    for (var section of this.sections) {
      let index = this.sections.find(data => data == section);

      const element = document.getElementById(index);
      if (element != null) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < viewHeight /3 ) {
          this.currentSection.next(section);
        }
      }
    }
  }

  openSidebar(){
    this.helperService.setSidebarStatus(true);
  }

  closeSideBar(){
    this.helperService.setSidebarStatus(false);
  }
  
}
