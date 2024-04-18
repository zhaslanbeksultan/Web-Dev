import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-company-vacancies',
  standalone: true,
  imports: [
    RouterLink, CommonModule
  ],
  templateUrl: './company-vacancies.component.html',
  styleUrl: './company-vacancies.component.css'
})
export class CompanyVacanciesComponent implements OnInit{
  vacancies: Vacancy[] = []
  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies(){
    this.route.paramMap.subscribe((params) => {
      const id : number = Number(params.get('pk'));
      if(id){
        this.vacancyService.getCompanyVacancies(id).subscribe((data) => {
          this.vacancies = data
        })
      }
    })
  }
}
