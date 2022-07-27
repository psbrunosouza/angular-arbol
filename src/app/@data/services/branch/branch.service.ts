import { Injectable } from '@angular/core';
import {BranchModel, IBranchService} from "../../models/branch.model";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {EnsureAuthenticateService} from "../auth/ensure-authenticate.service";
import {HttpService} from "../http/http.service";

@Injectable({
  providedIn: 'root'
})
export class BranchService implements IBranchService{

  url = '/branches';

  constructor(private http: HttpService) {
  }

  create(branch: BranchModel): Observable<BranchModel> {
    return this.http.post<BranchModel, BranchModel>({
      baseUrl: environment.baseUrl,
      resource: this.url,
      payload: branch
    });
  }

  delete(id: number): Observable<BranchModel> {
    return this.http.delete<BranchModel>({
      baseUrl: environment.baseUrl,
      resource: `${this.url}/${id}`
    });
  }


  listRoots(): Observable<BranchModel[]> {
    return this.http.get<BranchModel[]>({
      baseUrl: environment.baseUrl,
      resource: `${this.url}/roots`
    });
  }

  show(id: number): Observable<BranchModel> {
    return this.http.get<BranchModel>({
      baseUrl: environment.baseUrl,
      resource: `${this.url}/${id}`
    });
  }

  update(branch: BranchModel): Observable<BranchModel> {
    return this.http.put<BranchModel, BranchModel>({
      baseUrl: environment.baseUrl,
      resource: `${this.url}/${branch.id}`,
      payload: branch
    });
  }
}
