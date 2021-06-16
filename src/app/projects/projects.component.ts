import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Project{
  name:string;
  description:string;
  link:string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.http.get('assets/data/projects.json')
    .subscribe((res:any)=>{
      this.projects = res.projects;
    })
  }

}
