import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Titles } from "../models/titles.model";

@Injectable({
  providedIn: 'root'
})
export class TitlesService {

  apiURL = 'http://localhost:20937/api';
  titleList = [
    'Mr',
    'Ms',
    'Miss',
    'Mrs',
    'Mx',
    'Master',
    'Sir',
    'Madam',
    'Dame',
    'Lord',
    'Lady',
    'Dr',
    'Prof',
    'Br',
    'Sr',
    'Fr',
    'Rev',
    'Pr',
    'Elder'
  ]

  constructor(private http: HttpClient) { }

  getTitles() {
    // return this.http.get<Titles[]>(this.apiURL + '/title');
    return this.titleList;
  }
}
