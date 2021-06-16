import { Component, OnInit } from '@angular/core';
import { School } from '../models/data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  schools:School[];

  constructor(private http:DataService) { }

  ngOnInit() {
    this.getEducationDetails();
  }

  getEducationDetails(){
    this.http.getEducationDetails()
    .then(response=>{
      if(response.success){
        this.schools = response.data;
      }
    })
  }

}
