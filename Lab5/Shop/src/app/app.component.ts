import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {NgForOf, NgIf} from "@angular/common";
import {ProductListComponent} from "./product-list/product-list.component";
import {categories} from "./categories";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoryComponent, TopBarComponent, NgIf, ProductListComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shop';
  protected readonly categories = categories;
}
