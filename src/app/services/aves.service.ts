import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aves } from '../models/aves';
import { Observable } from 'rxjs';
import { avesclass } from '../components/aves-form/avesclass';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AvesService {

  API_URI = 'http://localhost:8080/api';
  private httpHeaders = new  HttpHeaders({'Content-Type':'application/json'});


  constructor(private http: HttpClient) { }

  
  create (nuevaAve:avesclass) : Observable<avesclass>{
    return this.http.post<avesclass>(this.API_URI,nuevaAve,{headers:this.httpHeaders})
  }

  getAves() {
    return this.http.get(`${this.API_URI}/listarAves`);
  }

  getAve(cdave: string) {
    return this.http.get(`${this.API_URI}/listarAves/${cdave}`);
  }

  borrarAve(cdave: string) {
    return this.http.delete(`${this.API_URI}/listarAves/${cdave}`);
  }

  update(uptAve:avesclass): Observable<avesclass>{
    return this.http.put<avesclass>(`${this.API_URI}/${uptAve.cdave}`, uptAve, {headers: this.httpHeaders})
  }

}
