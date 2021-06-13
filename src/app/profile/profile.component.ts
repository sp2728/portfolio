import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Profile{
  name:string;
  email:string;
  phone:string;
  linkedIn:string;
  mediumUrl:string;
  location:string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Profile;

  constructor(
    private http:HttpClient
  ) { 
    this.getProfile();
  }

  ngOnInit() {
  }

  getProfile(){
    this.http.get('/assets/data/profile.json')
    .subscribe((res:any)=>{
      this.profile = res.profile;
    })
  }

}
