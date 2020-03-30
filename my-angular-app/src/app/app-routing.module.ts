import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/components/library.component';
import { ElementComponent } from './element/components/element.component';
import { WelcomeComponent } from './welcome/components/welcome.component';
import { UserService } from './welcome/services/user/user-service.service';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        resolve: { userService: UserService }
    },
    { path: 'library', component: LibraryComponent },
    { path: 'element', component: ElementComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
