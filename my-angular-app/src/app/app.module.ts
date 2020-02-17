import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { ElementComponent } from './element/element.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyAngularLibModule } from 'my-angular-lib';

@NgModule({
  declarations: [AppComponent, LibraryComponent, ElementComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, MyAngularLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
