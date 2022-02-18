import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../@data/models/user.model";
import {AuthService} from "../../../@data/services/auth.service";
import {HttpClient} from "@angular/common/http";
import {EnsureAuthenticateService} from "../../../@data/services/ensure-authenticate.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  providers: [AuthService]
})
export class AuthLoginComponent implements OnInit {
  user: UserModel;

  constructor(private authService: AuthService, private ensureAuthenticateService: EnsureAuthenticateService, private router: Router) { }

  ngOnInit(): void {
    this.user = new UserModel();
    this.ensureAuthenticateService.checkIsLogged('token');

    this.ensureAuthenticateService.isLogged$.subscribe((isLogged) => {
      isLogged && this.router.navigate(['/dashboard/diary']);
    });
  }

  submit(){
    this.authService.auth(this.user).subscribe((authData) => {
      this.ensureAuthenticateService.setToken(authData, 'token');
    });
  }
}
