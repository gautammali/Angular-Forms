import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  @ViewChild('tdForm') tdForm!:NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  tdFormData(tdfrom:any){
    console.log(this.tdForm.value);
    console.log("td form data");

  }

}
