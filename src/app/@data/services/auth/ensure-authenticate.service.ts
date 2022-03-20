import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import jwt_decode from "jwt-decode";
import {TokenModel} from "../../models/token.model";

@Injectable({
  providedIn: 'root'
})
export class EnsureAuthenticateService {

  private key = 'token_arbol_notes';

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.key, token);
  }

  getToken(): string | null {
    return <string>localStorage.getItem(this.key);
  }

  checkIsLogged(): boolean {
    const decodedToken = this.getToken() && <TokenModel>jwt_decode(<string>this.getToken());
    return !!(this.getToken() && decodedToken && decodedToken.exp > Math.ceil(Date.now() / 1000));
  }

  removeToken() {
    localStorage.removeItem(this.key);
  }
}
