// frontend/src/app/services/api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get('http://localhost:3000/api/config');
  }
}
