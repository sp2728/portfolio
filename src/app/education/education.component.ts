import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Schools{
  name:string;
  startDate:string;
  endDate:string;
  keyCourses:string[];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  schools:Schools;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getEducationDetails();
  }

  getEducationDetails(){
    this.http.get('/assets/data/education.json')
    .subscribe((res:any)=>{
      this.schools = res.education;
    })
  }

}
