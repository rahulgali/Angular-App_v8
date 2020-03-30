import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/components/library.component';
import { ElementComponent } from './element/components/element.component';
import { WelcomeComponent } from './welcome/components/welcome.component';
// import { MyAngularLibModule } from 'my-angular-lib';
import { UserService } from './welcome/services/user/user-service.service';
import { Environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, LibraryComponent, ElementComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MyAngularLibModule,
    HttpClientModule
  ],
  providers: [UserService, Environment],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
