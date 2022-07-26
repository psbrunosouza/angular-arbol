import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {EnsureAuthenticateService} from "../auth/ensure-authenticate.service";
import {IParams} from "./http.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  private httpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + this.ensureAuth.getToken(),
  });

  constructor(private httpClient: HttpClient, private ensureAuth: EnsureAuthenticateService) { }

  get<Out>(data: Omit<IParams<Out>, 'payload'>): Observable<Out> {
    return this.httpClient.get<Out>(`${data.baseUrl}${data.resource}`, {
      headers: this.httpHeaders,
      params: data.queryParams && new HttpParams().appendAll({params: data.queryParams})
    });
  }

  post<In, Out>(data: IParams<In>): Observable<Out> {
    return this.httpClient.post<Out>(`${data.baseUrl}${data.resource}`, data.payload,{
      headers: this.httpHeaders,
      params: data.queryParams && new HttpParams().appendAll({params: data.queryParams}),
    });
  }

  put<In, Out>(data: IParams<In>): Observable<Out> {
    return this.httpClient.put<Out>(`${data.baseUrl}${data.resource}`, data.payload,{
      headers: this.httpHeaders,
      params: data.queryParams && new HttpParams().appendAll({params: data.queryParams}),
    });
  }

  delete<Out>(data: Omit<IParams<Out>, 'payload'>): Observable<Out> {
    return this.httpClient.delete<Out>(`${data.baseUrl}${data.resource}`, {
      headers: this.httpHeaders,
      params: data.queryParams && new HttpParams().appendAll({params: data.queryParams}),
    });
  }

  patch<In, Out>(data: IParams<In>): Observable<Out> {
    return this.httpClient.put<Out>(`${data.baseUrl}${data.resource}`, data.payload,{
      headers: this.httpHeaders,
      params: data.queryParams && new HttpParams().appendAll({params: data.queryParams}),
    });
  }
}
