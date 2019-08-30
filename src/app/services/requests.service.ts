import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { climateUrl } from '../config/endpoint';
import { myToken } from '../config/token';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  getClimate(city: number): Observable<any> {
    return this.http.get<any>(`${climateUrl}forecast/locale/${city}/days/15?token=${myToken}`);
  }

  getLocales(cityName: any, stateName: string): Observable<any> {
    return this.http.get<any>(`${climateUrl}locale/city?name=${cityName}&state=${stateName}&token=${myToken}`);
  }
}
