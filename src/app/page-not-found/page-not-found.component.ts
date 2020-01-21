import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// here i am taking advantage of built in location service to go back to previous page

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public images = '../../assets/images/images.png';

  constructor( private location: Location) {
    setTimeout(() => {
      this.location.back()
    }, 20000)
  }

  ngOnInit() {
  }

  public goback(){
    this.location.back();

  }
}
