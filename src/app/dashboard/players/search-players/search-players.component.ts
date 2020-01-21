import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.scss']
})
export class SearchPlayersComponent implements OnInit {

   public playerimage = "../../../../assets/images/no_image.png";

  searchForm : FormGroup;

  constructor( private formbuilder: FormBuilder) { }

  ngOnInit() {

    this.searchForm= this.formbuilder.group ({
     'name': [''],
     'TeamName': [''],
     'Email': ['']
    })
  }

}
