import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule,FormGroup,Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CheckboxModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm!:FormGroup;
constructor(private fb:FormBuilder,private authServ:AuthService,private router:Router){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      const {username,password}=this.loginForm.value;
      this.authServ.login(username,password).subscribe({
        next:(res)=>{
          console.log(res)
          this.authServ.storeToken(res.token);
          this.authServ.storeRole(res.user)
          this.router.navigate(['/dashboard'])
        },
        error:(err)=>{
          console.log(err)
        }
      })
      console.log("form Submited",this.loginForm.value)
    }
  }
}
