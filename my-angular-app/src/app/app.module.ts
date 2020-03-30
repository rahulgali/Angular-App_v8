import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementModule } from './element/element.module';
import { UserService } from './home/services/user/user-service.service';
import { LibraryModule } from './library/library.module';
import { HomeModule } from './home/home.module';
// import { MyAngularLibModule } from 'my-angular-lib';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HomeModule,
        ElementModule,
        LibraryModule,
        // MyAngularLibModule,
    ],
    providers: [
        UserService,
        Environment
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
