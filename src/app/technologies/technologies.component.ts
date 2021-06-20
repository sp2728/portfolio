import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/data.model';
import { DataService } from '../services/data.service';
import { trigger, transition, animate, style, state } from '@angular/animations'
import { HelperService } from '../services/helper.service';
import { SECTIONS } from '../constant';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  animations: [
    trigger('slideFromLeft', [
      state('false', style({opacity: 0})),
      transition('false => true', [
        style({opacity: 0, transform: 'translateX(-100%)'}),
        animate('1s ease-in', style({opacity: 1 , transform: 'translateX(0%)'}))
      ]),
      transition('true => false', [
        style({opacity: 1}),
        animate('1s ease-in', style({opacity: 0, transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class TechnologiesComponent implements OnInit {

  skills:Skill[];
  isSlide:boolean=false;


  constructor(
    private http:DataService,
    private helperService:HelperService
    ) { }

  ngOnInit() {
    this.getSkills();
    this.getCurrentSection();
  }

  getCurrentSection(){
    this.helperService.getCurrentSection().subscribe(res=>{
      console.log(res);
      if(res==SECTIONS.TECHNOLOGIES){
        this.isSlide = true;
      }
      else{
        this.isSlide = false;
      }
    })
  }


  getSkills(){
    this.http.getSkills()
    .then(response=>{
      if(response.success){
        this.skills = response.data;
      }
    })
  }

}
