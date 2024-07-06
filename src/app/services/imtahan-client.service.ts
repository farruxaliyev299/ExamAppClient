import { Injectable } from '@angular/core';
import { HttpClientService } from './common/http-client.service';
import { Observable } from 'rxjs';
import { Imtahan } from '../models/imtahan';

@Injectable({
  providedIn: 'root'
})
export class ImtahanClientService {

  constructor(private _httpClient: HttpClientService) { }

  add(requestData: Partial<Imtahan>): Observable<Imtahan> {
    return this._httpClient.post<Imtahan>({ controller: "imtahan"}, requestData);
  }

  update(requestData: Partial<Imtahan>): Observable<Imtahan> {
    return this._httpClient.put<Imtahan>({ controller: "imtahan"}, requestData);
  }

  get(): Observable<Imtahan[]> {
    return this._httpClient.get<Imtahan[]>({ controller: "imtahan" });
  }

  delete(nomre: number): Observable<Imtahan> {
    return this._httpClient.delete<Imtahan>({ controller: "imtahan" }, nomre);
  }
}
