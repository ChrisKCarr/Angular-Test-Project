import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'This is a test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/olive-garden-ziti-al-forno-recipe-2-1640031063.jpeg',
      [new Ingredient('Meat', 4), new Ingredient('Cheese', 10)]
    ),
    new Recipe(
      'Stew',
      'This is a test 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
      [new Ingredient('Potatoes', 8), new Ingredient('Cheese', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
