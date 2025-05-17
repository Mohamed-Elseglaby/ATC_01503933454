import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface User{
  id:string,
  username:string,
  role:string
}
interface authResponse{
  message:string,
  token?:string,
  user?:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'https://areeb-back-2025.vercel.app/api/auth'
  private token = '49e5a5551eba19c2daa88574b38717f237b5a5a00d75fdba17f753440dde67695cb35d27567f352019a2eb30b7cd49b2a7898491c0668ee70b6553cb5cfb3b28'
  constructor(private http:HttpClient) { }

  register(username:string,password:string,role?:string):Observable<any>{
    return this.http.post<any>(`${this.URL}/register`,{username,password,role})
  }
  login(username:string,password:string):Observable<any>{
    return this.http.post<any>(`${this.URL}/login`,{username,password})
  }
  storeToken(token:string):void{
    localStorage.setItem('JWT',token)
  }
  storeRole(user:any){
    localStorage.setItem('role',user['role'])
  }
  getRole(){
    return localStorage.getItem('role');
  }
}
