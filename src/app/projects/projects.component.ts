import { Component, OnInit } from '@angular/core';
import { Project } from '../models/data.model';
import { DataService } from '../services/data.service';
import { trigger, transition, animate, style, state } from '@angular/animations'
import { HelperService } from '../services/helper.service';
import { SECTIONS } from '../constant';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slideDisplay', [
      state('false', style({opacity: 0})),
      transition('false => true', [
        style({opacity: 0}),
        animate('0.5s ease-in', style({opacity: 1 }))
      ]),
      transition('true => false', [
        style({opacity: 1}),
        animate('0.2s ease-in', style({opacity: 0}))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  isSlide:boolean = false;

  constructor(
    private http:DataService,
    private helperService:HelperService
    ) { }

  ngOnInit() {
    this.getProjects();
    this.getCurrentSection();
  }

  getCurrentSection(){
    this.helperService.getCurrentSection().subscribe(res=>{
      console.log(res);
      if(res==SECTIONS.PROJECTS){
        this.isSlide = true;
      }
      else{
        this.isSlide = false;
      }
    })
  }

  getProjects(){
    this.http.getProjects()
    .then(response=>{
      if(response.success){
        this.projects = response.data;
      }
    })
  }

}
