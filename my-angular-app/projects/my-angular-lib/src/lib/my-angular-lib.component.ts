import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-angular-lib',
  template: `
    <p>
      My library component works!!
    </p>
  `,
  styles: []
})
export class MyAngularLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
