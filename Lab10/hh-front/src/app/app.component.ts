import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {CompanyVacanciesComponent} from "./company-vacancies/company-vacancies.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CompanyListComponent, CompanyVacanciesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh-front';
}
