import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private _router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {

    this.loginForm = this.formbuilder.group({
      'UserName':[''],
      'password':['']
    })
  }

  OnClick() {
    this._router.navigate(['/dashboard/register'], {relativeTo: this.route});
  }

}
