import { Injectable } from '@angular/core';
import { HttpClientService } from './common/http-client.service';
import { Shagird } from '../models/shagird';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShagirdClientService {

  constructor(private _httpClient: HttpClientService) { }

  add(requestData: Partial<Shagird>): Observable<Shagird> {
    return this._httpClient.post<Shagird>({ controller: "shagird"}, requestData);
  }

  update(requestData: Partial<Shagird>): Observable<Shagird> {
    return this._httpClient.put<Shagird>({ controller: "shagird"}, requestData);
  }

  get(): Observable<Shagird[]> {
    return this._httpClient.get<Shagird[]>({ controller: "shagird" });
  }

  delete(nomre: number): Observable<Shagird> {
    return this._httpClient.delete<Shagird>({ controller: "shagird" }, nomre);
  }
}
