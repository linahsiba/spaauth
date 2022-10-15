import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.formBuilder.group(
      {
        username: [''],
        password: ['']
      }
    )
  }

  ngOnInit(): void {}

  login() {
    this.http.get<any>('http://localhost:3000/users').subscribe(
      res => {
        const user = res.find(
          (a:any) => {
            return a.username == this.loginForm.value.username && a.password == this.loginForm.value.password
          }
        )
        
        if (user) {
          alert("User exists.")
          this.loginForm.reset();
        }
      }
    )
  }
}
