import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  password: string;
  firstname: string;
  lastname: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log("REGISTERING");
  }

  setPassword(password: string) {
    this.password = password;
  }

  setReason(reason: string) {
  }

}
