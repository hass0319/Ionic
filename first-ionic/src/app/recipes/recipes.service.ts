import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [{
    id: 'r1',
    title: 'schnitzel',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMm5eJwwKll4iOW2MIOI2wzSwxC4-vAXcmUw&usqp=CAU',
    ingredients: ['french freis', 'pork meat', 'Salad']
  },
  {
    id: 'r1',
    title: 'Spaghetti',
    imageUrl: 'https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-1st-image.jpg',
    ingredients: ['french freis', 'pork meat', 'Salad']
  }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => recipe.id === recipeId)
    };
  };
}
