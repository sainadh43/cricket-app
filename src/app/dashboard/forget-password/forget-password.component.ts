import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetForm: FormGroup;

  constructor( private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.forgetForm = this.formbuilder.group({

      'newpass':[''],
      'retypepass':['']
    })
  }

}
