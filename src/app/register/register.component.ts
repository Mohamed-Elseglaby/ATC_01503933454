import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
registerForm!:FormGroup;
constructor(private fb:FormBuilder,private authServ:AuthService){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required]
    })
  }
  onSubmit(){
    if(this.registerForm.valid){
      const {username,password,role}=this.registerForm.value;
      this.authServ.register(username,password,role).subscribe({
        next:(res)=>{
          console.log(res)
        },
        error:(err)=>{
          console.log(err)
        }
      })
      console.log("form Submited",this.registerForm.value)
    }
  }
}
