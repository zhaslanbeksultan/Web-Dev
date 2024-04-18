import {RouterModule, Routes} from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {CompanyVacanciesComponent} from "./company-vacancies/company-vacancies.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies/', component: CompanyListComponent , title:"companies"},
  { path: 'companies/:id/vacancies', component: CompanyVacanciesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
