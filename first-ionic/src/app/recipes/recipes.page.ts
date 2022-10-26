import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  // recipes: Recipe[] = [{
  //   id: 'r1',
  //   title: 'schnitzel',
  //   imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMm5eJwwKll4iOW2MIOI2wzSwxC4-vAXcmUw&usqp=CAU',
  //   ingredients: ['french freis', 'pork meat', 'Salad']
  // },
  // {
  //   id: 'r1',
  //   title: 'Spaghetti',
  //   imageUrl: 'https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-1st-image.jpg',
  //   ingredients: ['french freis', 'pork meat', 'Salad']
  // }
  // ];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

}
