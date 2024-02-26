import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CategoryComponent} from "../category/category.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    CategoryComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}
