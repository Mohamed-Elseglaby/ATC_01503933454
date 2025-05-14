import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './Landing/landing.component';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:LandingComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'event',component:RegisterComponent},
    {path:'**',redirectTo:'home'}
];
