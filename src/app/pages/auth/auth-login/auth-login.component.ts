import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../@data/models/user.model";
import {AuthService} from "../../../@data/services/auth.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  providers: [AuthService]
})
export class AuthLoginComponent implements OnInit {
  user: UserModel;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = new UserModel();
  }

  submit(){
    this.authService.auth(this.user).subscribe((res) => {
      console.log(res)
    })
  }
}
