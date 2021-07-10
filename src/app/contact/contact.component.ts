import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

export interface MessageInfo{
  name:string;
  email:string;
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
    private _snackBar:MatSnackBar
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

      this.submitted = false;

      this.contactForm.reset();

      this.formDirective.resetForm();
      
      this._snackBar.open('Message Submitted', 'Close', {
        duration:2000
      });
    }
  }



}
