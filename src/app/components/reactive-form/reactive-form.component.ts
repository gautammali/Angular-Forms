import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      fname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      lname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      bod:new FormControl('',[Validators.required,]),
      email:new FormControl('',[Validators.required,Validators.email]),
    });
  }

  reactiveFormData(){
    if(this.reactiveForm.invalid)return;
    console.log(this.reactiveForm.value);
  }

  fnameErros(){
    const fname=this.reactiveForm.get('fname');
    if(fname?.touched && fname?.invalid){
        if(fname?.errors?.['minlength']){
          return '*atleast three charactors are required'
        }
        if(fname?.errors?.['pattern']){
          return "* only Alphabates allowed"
        }else {
          return "* required"
        }
    }
    return null;
  }

  lnameErros(){
    const lname=this.reactiveForm.get('lname');
    if(lname?.touched && lname?.invalid){
        if(lname?.errors?.['minlength']){
          return '*atleast three charactors are required'
        }
        if(lname?.errors?.['pattern']){ 
          return "* only Alphabates allowed"
        }else {
          return "* required"
        }
    }
    return null;
  }
  bodErros(){
    const bod=this.reactiveForm.get('bod');
    if(bod?.invalid && bod?.touched){
      return "*birth date is required";
    }
    return null
  }
  emailErros(){
    const email=this.reactiveForm.get('email');
    if(email?.touched && email.invalid){
      if(email.errors?.['email']){
        return "*please check your email"
      }
      return "*email us required";
    }
    return null;
  }


}
