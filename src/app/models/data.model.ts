export interface ResponseData{
    success:boolean;
    data?:any;
    error?:string;
}

export class Profile{
    name:string;
    email:string;
    phone:string;
    linkedIn:string;
    image:string;
    mediumUrl:string;
    location:string;

    adapter(data:any){
        this.name = data.name? data.name:null;
        this.email = data.email? data.email:null;
        this.phone = data.phone? data.phone:null;
        this.image = data.image? data.image:null;
        this.linkedIn = data.linkedIn? data.linkedIn:null;
        this.mediumUrl = data.mediumUrl? data.mediumUrl:null;
        this.location = data.location? data.location:null;
        return this;
    }
}

export class Skill{
    name:string;
    logo:string;
    type:string;

    adapter(data:any){
        this.name = data.name? data.name:null;
        this.logo = data.logo? data.logo:null;
        this.type = data.type? data.type:null;
        return this;
    }
}

export class Blog{
    name:string;
    link:string;

    adapter(data:any){
        this.name = data.name? data.name:null;
        this.link = data.link? data.link:null;
        return this;
    }
}

export class Certification{
    name:string;
    organization:string;
    link:string;

    adapter(data:any){
        this.name = data.name? data.name:null;
        this.organization = data.organization? data.organization:null;
        this.link = data.link? data.link:null;
        return this;
    }
}

export class Project{
    name:string;
    logo:string;
    description:string;
    link:string;
    tags:string;

    adapter(data:any){
        this.name = data.name ? data.name:null;
        this.description = data.description ? data.description:null;
        this.logo = data.logo ? data.logo:null;
        this.link = data.link ? data.link:null;
        this.tags = data.tags ? data.tags:null;
        return this;
    }
}

export class School{
    name:string;
    startDate:string;
    endDate:string;
    degree:string;
    major:string;
    specialization:string;
    keyCourses:string[];

    adapter(data:any){
        this.name = data.name? data.name:null;
        this.startDate = data.startDate? data.startDate:null;
        this.endDate = data.endDate? data.endDate:null;
        this.keyCourses = data.keyCourses? data.keyCourses:null;
        this.degree = data.degree? data.degree:null;
        this.major = data.major? data.major:null;
        this.specialization = data.specialization? data.specialization:null;
        return this;
    }
  }
  
