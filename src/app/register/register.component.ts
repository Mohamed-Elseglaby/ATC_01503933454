import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
registerForm!:FormGroup;
constructor(private fb:FormBuilder,private authServ:AuthService
  ,private router:Router
){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }
  onSubmit(){
    if(this.registerForm.valid){
      const {username,password}=this.registerForm.value;
      this.authServ.register(username,password).subscribe({
        next:(res)=>{
          console.log(res)
          this.router.navigate(['/login'])
        },
        error:(err)=>{
          console.log(err)
        }
      })
      console.log("form Submited",this.registerForm.value)
    }
  }
}
