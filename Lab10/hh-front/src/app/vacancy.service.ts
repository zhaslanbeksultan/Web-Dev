import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  BASE_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // getVacancies(): Observable<Vacancy[]> {
  //   return this.http.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`)
  // }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/companies/${id}/vacancies`)
  }
}
