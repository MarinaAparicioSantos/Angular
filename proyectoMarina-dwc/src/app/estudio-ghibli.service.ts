import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudioGhibliService {

  constructor(private http:HttpClient ){ }

  getData(){

    let url ="https://ghibliapi.herokuapp.com/films/";
    return this.http.get(url);
  }
}
