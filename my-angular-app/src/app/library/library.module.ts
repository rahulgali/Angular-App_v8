import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './components/library.component';
import { MyAngularLibModule } from 'my-angular-lib';

@NgModule({
    declarations: [
        LibraryComponent
    ],
    imports: [
        CommonModule,
        MyAngularLibModule
    ],
    exports: [
        LibraryComponent
    ]
})
export class LibraryModule {
    constructor() {
        console.log('Library module loaded.!!');
    }
}
