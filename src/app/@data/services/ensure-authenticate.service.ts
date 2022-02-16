import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnsureAuthenticateService {

  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  private setIsLogged(value: boolean): void {
    this.isLogged$.next(value);
  }

  setToken(data: any, key: string) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
    this.setIsLogged(true);
  }

  getToken(key: string) {
    return localStorage.getItem(key);
  }

  checkIsLogged(key: string) {
    this.getToken(key) && this.setIsLogged(true);
  }

  removeToken(key: string) {
    localStorage.removeItem(key);
  }
}
