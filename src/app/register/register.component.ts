import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  constructor(private FormBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.FormBuilder.group(
      {
        username: [''],
        email: [''],
        password: [''],
        confirmedPassword: ['']
      }
    )
  }

  register() {
    this.http.post<any>(
      "http://localhost:3000/users",
      this.registerForm.value
    ).subscribe(
      res => {
        alert()
      }
    )
  }

}
