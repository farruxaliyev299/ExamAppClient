import { Injectable } from '@angular/core';
import { HttpClientService, HttpRequestParams } from './common/http-client.service';
import { Observable } from 'rxjs';
import { Ders } from '../models/ders';

@Injectable({
  providedIn: 'root'
})
export class DersClientService {

  constructor(private _httpClient: HttpClientService) { }

  add(requestData: Partial<Ders>): Observable<Ders> {
    return this._httpClient.post<Ders>({ controller: "ders"}, requestData);
  }

  update(requestData: Partial<Ders>): Observable<Ders> {
    return this._httpClient.put<Ders>({ controller: "ders"}, requestData);
  }

  get(kod?: string): Observable<Ders[]> {
    return this._httpClient.get<Ders[]>({ controller: "ders" }, kod);
  }

  delete(kod: string): Observable<any> {
    return this._httpClient.delete({ controller: "ders" }, kod);
  }
}
