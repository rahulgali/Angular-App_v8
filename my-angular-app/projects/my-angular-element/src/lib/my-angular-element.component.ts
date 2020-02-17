import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-angular-element',
  template: `
    <p>
      my-angular-element works!
    </p>
  `,
  styles: []
})
export class MyAngularElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
