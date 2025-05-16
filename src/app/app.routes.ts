import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './Landing/landing.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:LandingComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'event/:id',component:EventDetailComponent},
    {path:'**',redirectTo:'home'}
];
