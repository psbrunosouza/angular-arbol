import { Component, OnInit } from '@angular/core';
import {EnsureAuthenticateService} from "../../../@data/services/auth/ensure-authenticate.service";
import {Router} from "@angular/router";
import {UserModel} from "../../../@data/models/user.model";
import {UserService} from "../../../@data/services/user/user.service";

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
  providers: [UserService ]
})
export class AuthRegisterComponent implements OnInit {

  user: UserModel;

  constructor(private userService: UserService, private ensureAuthenticateService: EnsureAuthenticateService, private router: Router) { }

  ngOnInit(): void {
    this.user = new UserModel();

    if(this.ensureAuthenticateService.checkIsLogged()) {
      this.router.navigate(['/dashboard/task']);
    }
  }

  submit(): void {
    this.userService.create(this.user).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/dashboard/task']);
    })
  }

}
