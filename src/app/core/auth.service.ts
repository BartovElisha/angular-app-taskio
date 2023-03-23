import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService) { }

  isLoggedIn(): boolean {
    const token = this.api.getToken();    
    return (token && token.length > 0) ? true : false; 
  }
}
