import { Component, OnInit } from '@angular/core';
import { HelperService } from './services/helper.service';
import { MatSnackBar } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeSection:string;

  splashOpen:boolean= true;

  sections = ['profile', 'technologies', 'blogs', 'projects', 'education', 'contact']

  constructor(
    private _snackBar:MatSnackBar,
    private helperService:HelperService,
    private router:Router
    ) {
      const navEndEvents = router.events.pipe(
        filter(event=> event instanceof NavigationEnd),
      );

      navEndEvents.subscribe((event:NavigationEnd)=>{
        gtag('config', 'UA-47058828-2', {
          'page_path': event.urlAfterRedirects
        });
      })
  }

  ngOnInit() {
    this._snackBar.open('Website is under development','OK', {
      verticalPosition: 'top',
    });

    setTimeout(()=>{
      this.splashOpen = false;
    });
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
