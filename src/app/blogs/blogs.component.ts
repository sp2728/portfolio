import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Blog{
  name:string;
  link:string;
}

export interface Certification{
  name:string;
  organization:string;
  link:string;
}

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs:Blog[];
  certifications:Certification[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getBlogsData();
  }

  getBlogsData(){
    this.http.get('assets/data/blogs.json')
    .subscribe((res:any)=>{
      this.blogs = res.blogs;
      this.certifications = res.certifications;
    })
  }

}
