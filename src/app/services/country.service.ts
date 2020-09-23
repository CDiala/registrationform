import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  apiUrl: string = 'https://restcountries.eu/rest/v2/all';

  constructor( private http: HttpClient ) { }

  // readonly APIUrl = "http://localhost:20937/api";

  getCountryList() {
    return this.http.get<Country[]>(`${this.apiUrl}`);
  }



  // getCountryList() {
  //   this.http.get('http://localhost:20937/api/Country/5').subscribe((data): any[] => {
  //     console.warn(<object[]>data);
  //     return <object[]>data;
  //     // console.warn(data);
  //   })
  // }
}
