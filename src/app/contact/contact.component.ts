import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/internal/operators/map';

export interface MessageInfo{
  name:string;
  email:string;
  subject:string;
  message:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  messageInfo: MessageInfo;
  submitted:boolean = false;

  @ViewChild('formDirective', {static:false}) private formDirective: NgForm;


  constructor(
    private fb:FormBuilder,
    private _snackBar:MatSnackBar,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.contactForm = this.fb.group({
      name:['', [Validators.required]],
      subject:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      message:['',[Validators.required]]
    })
  }

  getErrorMessage(control:AbstractControl){
    if(control.errors.required){
      return 'Required';
    }
    if(control.errors.email){
      return 'Invalid Email'
    }
  }

  onSubmit(){
    this.submitted = true;
    if(this.contactForm.valid){
      this.messageInfo = this.contactForm.value;
      this.http.post('https://formspree.io/mayplzlg', this.messageInfo).subscribe((res:any)=>{
        console.log(res)

        if(res.ok){
          this.submitted = false;

          this.contactForm.reset();
    
          this.formDirective.resetForm();
          this._snackBar.open('I have recieved your message. Will get back to you shortly', 'OK', {
            duration:2000
          });
        }

        else{
          this._snackBar.open('Unable process the request. Please submit again', 'Close', {
            duration:2000
          });
        }
      })

    }
  }



}
