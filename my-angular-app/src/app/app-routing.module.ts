import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementComponent } from './element/components/element.component';
import { HomeComponent } from './home/components/home.component';
import { LibraryComponent } from './library/components/library.component';
import { UserService } from './home/services/user/user-service.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: { userService: UserService }
    },
    {
        path: 'library',
        component: LibraryComponent
    },
    {
        path: 'element',
        component: ElementComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
