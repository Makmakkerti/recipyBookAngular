import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Shwarma Recipe 1', 'Shwarma Recipe description', 'https://www.kitchensanctuary.com/wp-content/uploads/2015/02/Chicken-Shawarma-square-FS-57.jpg'),
    new Recipe('Falafel Recipe', 'Falafel prepare from nut!', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Falafel-7-1.jpg'),
    new Recipe('Thina Recipe', 'Thina from melted seeds recipe', 'https://i.ytimg.com/vi/dh2LPPXMo0A/maxresdefault.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
