import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import { AuthService } from '../Services/auth.service';
@Injectable({
  providedIn:'root'
})
export class noAuthGuard implements CanActivate{
  constructor(private router:Router,private authServ:AuthService){}
  canActivate(): boolean {
  if(localStorage.getItem('JWT')&& localStorage.getItem('role')==='user'){
      this.router.navigate(['/home'])
    return false
  }
  if(localStorage.getItem('JWT')&& localStorage.getItem('role')==='admin'){
      this.router.navigate(['/dashboard'])
    return false
  }
  return true
  }
};
