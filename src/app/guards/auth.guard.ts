import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import { AuthService } from '../Services/auth.service';
@Injectable({
  providedIn:'root'
})
export class authGuard implements CanActivate{
  constructor(private router:Router,private authServ:AuthService){}
  canActivate(): boolean {
  if(localStorage.getItem('JWT')&&localStorage.getItem('role')==='admin'){
    return true
  }
  this.router.navigate(['/login'])
  return false
  }
};
