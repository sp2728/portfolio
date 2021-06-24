import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from './services/helper.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { SECTIONS } from './constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeSection:string;

  sections = ['profile', 'technologies', 'blogs', 'projects', 'education', 'contact']

  constructor(
    private _snackBar:MatSnackBar,
    private helperService:HelperService
    ) {
  }

  ngOnInit() {
    this._snackBar.open('Website is under development','OK', {
      verticalPosition: 'top',
    })
  }

  getCurrentSection(){
    this.helperService.getCurrentSection().subscribe((res:string)=>{
      this.activeSection = res;
    })
  }

  keepTrack() {
    const viewHeight = window.innerHeight;
    for (var section of this.sections) {
      let index = this.sections.find(data => data == section);

      const element = document.getElementById(index);
      if (element != null) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < viewHeight /3 ) {
          if(this.activeSection != section){
            this.helperService.setCurrentSection(section);
          }
        }
      }
    }
  }

  changeSection(section: string) {
    let element = document.getElementById(section);
    element.scrollIntoView({behavior:'smooth', block: "start", inline: "nearest"});
    this.helperService.setCurrentSection(section);
  }



  
}
