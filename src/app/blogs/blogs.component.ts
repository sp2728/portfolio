import { Component, OnInit } from '@angular/core';
import { Blog, Certification } from '../models/data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs:Blog[];
  certifications:Certification[];

  constructor(private http:DataService) { }

  ngOnInit() {
    this.getBlogsData();
  }

  getBlogsData(){
    this.http.getBlogsAndCertifications()
    .then(response=>{
      if(response.success){
        this.blogs = response.data.blogs;
        this.certifications = response.data.certifications;
      }
    })
  }

}
