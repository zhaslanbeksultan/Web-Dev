import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Company} from "../models";
import {CompanyService} from "../company.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{
  companies: Company[] = [];

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("here");
    this.getCompanies();
  }

  getCompanies() {
    console.log("here");

    this.companyService.getCompanies().subscribe((data=> {
      this.companies = data;
    }))
  }
}
