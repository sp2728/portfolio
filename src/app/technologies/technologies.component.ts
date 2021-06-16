import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/data.model';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  skills:Skill[];

  constructor(private http:DataService) { }

  ngOnInit() {
    this.getSkills();
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
