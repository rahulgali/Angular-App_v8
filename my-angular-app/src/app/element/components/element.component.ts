import { Component, OnInit } from '@angular/core';

declare var require: any;
@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // require('dist/angular-element/element.js');
  }

}
