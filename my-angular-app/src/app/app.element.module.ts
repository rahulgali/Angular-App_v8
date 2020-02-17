import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MyAngularElementModule } from 'projects/my-angular-element/src/public-api';
import { MyAngularElementComponent } from 'projects/my-angular-element/src/public-api';

@NgModule({
  imports: [BrowserModule, MyAngularElementModule],
  entryComponents: [MyAngularElementComponent]
})
export class AppElementModule {
  constructor(public injector: Injector) {}

  public ngDoBootstrap() {
    const myAngElement = createCustomElement(MyAngularElementComponent, { injector: this.injector });
    customElements.define('my-angular-element', myAngElement);
    // We can use this selector "my-angular-element" defined above, as a Web Component any where in the app.
  }
}
