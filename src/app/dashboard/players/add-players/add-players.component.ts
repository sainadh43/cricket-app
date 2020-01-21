import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss']
})
export class AddPlayersComponent implements OnInit {

  public playerimage = "../../../../assets/images/no_image.png";

  addForm : FormGroup;

  constructor( private formbuilder: FormBuilder) { }

  ngOnInit() {

    this.addForm = this.formbuilder.group({
      'name': [''],
      'TeamName': [''],
      'Email': [''],
      'PhoneNumber': [''],
      'Role': [''],
      'Gender': [''],
      'address': [''],
      'city': [''],
      'state': [''],
      'zipcode': ['']

    })
  }


}
