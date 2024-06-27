import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl = 'https://localhost:7156/api';

  constructor(private http: HttpClient) { }

  login(formValue: any) {
     return this.http.post(`${this.apiUrl}/login`, formValue);
 }
  
}