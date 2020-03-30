import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components//home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
    constructor() {
        console.log('Home module loaded.!!');
    }
}
