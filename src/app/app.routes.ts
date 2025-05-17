import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './Landing/landing.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { noAuthGuard } from './guards/no-auth.guard';
import { authGuard } from './guards/auth.guard';
import { AddEventComponent } from './add-event/add-event.component';
import { ShowEventsComponent } from './show-events/show-events.component';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:LandingComponent},
    {path:'login',component:LoginComponent,canActivate:[noAuthGuard]},
    {path:'register',component:RegisterComponent,canActivate:[noAuthGuard]},
    {path:'dashboard',component:DashboardComponent,canActivate:[authGuard],
        children:[
            {path:'add',component:AddEventComponent},
            {path:'show',component:ShowEventsComponent},

        ]
    },
    {path:'event/:id',component:EventDetailComponent},
    {path:'**',redirectTo:'home'}
];
