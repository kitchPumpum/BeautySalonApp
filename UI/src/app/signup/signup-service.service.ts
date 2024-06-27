import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  private apiUrl = 'https://localhost:7156/api';

  constructor(private http: HttpClient) { }

  registerUser(formValue: any) {
    return this.http.post(`${this.apiUrl}/signup`, formValue);
  }
  
}
