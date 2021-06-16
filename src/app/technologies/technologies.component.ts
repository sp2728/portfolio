import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Skills{
  name:string;
  logo:string;
  type:string;
}

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  skills:Skills;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getSkills();
  }


  getSkills(){
    this.http.get('../assets/data/blogs.json')
    .subscribe((res:any)=>{
      this.skills = res.skills;
    })
  }

}
