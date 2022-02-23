import { Injectable } from '@angular/core';
import {BranchModel, IBranchService} from "../models/branch.model";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {EnsureAuthenticateService} from "./ensure-authenticate.service";

@Injectable()
export class BranchService implements IBranchService{

  url = '/branches';

  private httpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + this.ensureAuth.getToken('token'),
  });

  constructor(private http: HttpClient, private ensureAuth: EnsureAuthenticateService) {
  }

  create(branch: BranchModel): Observable<BranchModel> {
    return this.http.post<BranchModel>(`${environment.baseUrl}${this.url}`, branch, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<BranchModel> {
    return this.http.delete<BranchModel>(`${environment.baseUrl}${this.url}/${id}`, {headers: this.httpHeaders});
  }

  listRoots(): Observable<BranchModel[]> {
    return this.http.get<BranchModel[]>(`${environment.baseUrl}${this.url}/roots`, {headers: this.httpHeaders});
  }

  show(id: number): Observable<BranchModel> {
    return this.http.get<BranchModel>(`${environment.baseUrl}${this.url}/${id}`, {headers: this.httpHeaders});
  }

  update(branch: BranchModel): Observable<BranchModel> {
    return this.http.put<BranchModel>(`${environment.baseUrl}${this.url}/${branch.id}`, branch, {headers: this.httpHeaders});
  }
}
