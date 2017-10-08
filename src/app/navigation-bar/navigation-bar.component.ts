import { Component, OnInit } from '@angular/core';
import { LoginService, LoginInformation } from '../shared/login.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  private _loginInformation: LoginInformation;

  constructor(private _loginService: LoginService) { }

  isLoggedIn(): boolean {
    return this._loginInformation != null;
  }

  logout(): void {
    this._loginService.logout();
  }

  getEmail(): string {
    return this._loginInformation.userInfo.email;
  }

  ngOnInit() {
    this._loginService.getLoginInformation().subscribe((loginInformation: LoginInformation) => {
      this._loginInformation = loginInformation;
    });
  }

}
