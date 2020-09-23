import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lgas } from '../models/lgas.model';

@Injectable({
  providedIn: 'root'
})
export class LgaService {

  apiURL: string = 'http://localhost:20937/api';

  constructor(private http: HttpClient) { }

  getLgaList() {
    return this.http.get<Lgas[]>(this.apiURL + '/lga');
  }

}
