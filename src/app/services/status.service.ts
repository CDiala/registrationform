import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Status } from "../models/status.model";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  apiURL = 'http://localhost:20937/api/status';

  constructor(private http: HttpClient) { }

  getStatus() {
    return this.http.get<Status[]>(this.apiURL);
  }



}
