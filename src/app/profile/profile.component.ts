import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Profile;

  constructor(
    private http:DataService
  ) { 
    this.getProfile();
  }

  ngOnInit() {
  }

  getProfile(){
    this.http.getProfile()
    .then(response=>{
      if(response.success){
        this.profile = response.data;
      }
    })
  }

}
