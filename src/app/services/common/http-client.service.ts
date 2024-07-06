import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpRequestParams {
  controller?: string;
  action?: string;
  baseUrl?: string;
  headers?: HttpHeaders;

  fullUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private url(requestParameters: Partial<HttpRequestParams>): string {
    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl}/${requestParameters.controller}${requestParameters.action ? `/${requestParameters.action}` : ""}`;
  }

  get<T>(request: Partial<HttpRequestParams>, parameter?: any) : Observable<T> {
    let url: string = request.fullUrl ?
      request.fullUrl :
      `${this.url(request)}${parameter ? `/${parameter}` : ""}`;

    return this.httpClient.get<T>(url, { headers: request.headers})
  }

  post<T>(request: Partial<HttpRequestParams>, body?: Partial<T>) : Observable<T> {
    let url: string = request.fullUrl ?
    request.fullUrl :
    `${this.url(request)}`;

    return this.httpClient.post<T>(url, { requestData: body }, { headers: request.headers });
  }

  put<T>(request: Partial<HttpRequestParams>, body?: Partial<T>) : Observable<T> {
    let url: string = request.fullUrl ?
    request.fullUrl :
    `${this.url(request)}`;

    return this.httpClient.put<T>(url, { requestData: body }, { headers: request.headers });
  }

  delete<T>(request: Partial<HttpRequestParams>, parameter: any) : Observable<T> {
    let url: string = request.fullUrl ?
    request.fullUrl :
    `${this.url(request)}/${parameter}`;

    return this.httpClient.delete<T>(url, { headers : request.headers });
  }
}
