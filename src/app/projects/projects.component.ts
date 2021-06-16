import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from '../models/data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  constructor(private http:DataService) { }

  ngOnInit() {
    this.getProjects();
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
