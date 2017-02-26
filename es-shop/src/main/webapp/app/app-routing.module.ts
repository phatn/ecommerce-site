import {NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./resgister/register.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,  { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
