import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Company, Vacancy} from './models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    console.log("here1");
    return this.http.get<Company[]>(`${this.BASE_URL}/companies/`)
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}`)
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/companies/${id}/vacancies`)
  }
}
