import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './components/element.component';

@NgModule({
    declarations: [
        ElementComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ElementComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ElementModule {
    constructor() {
        console.log('Element module loaded.!!');
    }
}
