import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Blog, Certification, Profile, Project, ResponseData, School, Skill } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) { }


  getProfile():Promise<ResponseData>{
    return this.http.get('assets/data/profile.json')
    .pipe(
      map((response:any)=>{
        if(response){

          let profile = new Profile().adapter(response.profile);

          return {success:true, data:profile}
        }
        else{
          return {success:false, data:null}
        }
      })
    )
    .toPromise();
  }

  getSkills():Promise<ResponseData>{
    return this.http.get('assets/data/technologies.json')
    .pipe(
      map((response:any)=>{
        if(response){
          let skills = response.skills.map(data=>{
            return new Skill().adapter(data);
          })

          return {success:true, data:skills}
        }
        else{
          return {success:false, data:null}
        }
      })
    )
    .toPromise();
  }


  getBlogsAndCertifications():Promise<ResponseData>{
    return this.http.get('assets/data/blogs.json')
    .pipe(
      map((response:any)=>{
        if(response){

          let blogs = response.blogs.map(data=>{
            return new Blog().adapter(data);
          })

          let certifications = response.certifications.map(data=>{
            return new Certification().adapter(data);
          })

          return {success:true, data:{blogs, certifications}}
        }
        else{
          return {success:false, data:null}
        }
      })
    )
    .toPromise();
  }


  getProjects():Promise<ResponseData>{
    return this.http.get('assets/data/projects.json')
    .pipe(
      map((response:any)=>{
        if(response){
          let projects = response.projects.map(data=>{
            return new Project().adapter(data);
          })

          return {success:true, data:projects}
        }
        else{
          return {success:false, data:null}
        }
      })
    )
    .toPromise();
  }

  getEducationDetails():Promise<ResponseData>{
   return this.http.get('assets/data/education.json')
    .pipe(
      map((response:any)=>{
        if(response){
          let schools = response.education.map(data=>{
            return new School().adapter(data);
          })

          return {success:true, data:schools}
        }
        else{
          return {success:false, data:null}
        }
      })
    )
    .toPromise();
    
  }




}
