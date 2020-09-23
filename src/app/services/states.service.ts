import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { States } from './../models/states.model';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  apiURL = 'https://nigerian-states-info.herokuapp.com/api/v1/states';

  constructor( private http: HttpClient) { }


  getStates() {
    return this.http.get<States[]>(this.apiURL);
  }

  // getStateByID(id:string) {
  //   return this.http.get<States[]>(this.apiURL + '/' + id);
  // }



}
