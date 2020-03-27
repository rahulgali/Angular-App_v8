import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { ElementComponent } from './element/element.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyAngularLibModule } from 'my-angular-lib';

@NgModule({
  declarations: [AppComponent, LibraryComponent, ElementComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyAngularLibModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
