import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm=new FormGroup({
  email:new FormControl('',Validators.required),
  password:new FormControl('')
})

// get email(){return this.loginForm.get('email')
// }
get f()
{
    return this.loginForm.controls;
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
