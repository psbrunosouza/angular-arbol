import { Component, OnInit } from '@angular/core';
import {EnsureAuthenticateService} from "../../../@data/services/ensure-authenticate.service";

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  constructor(private ensureAuthenticateService: EnsureAuthenticateService) { }

  ngOnInit(): void {
    this.ensureAuthenticateService.checkIsLogged('token');
  }

}
