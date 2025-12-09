import Recipe from "../model/model.js";

async function addRecipe(recipeName, ingredients, duration, category) {
  try {
    if (!recipeName) {
      throw new Error("Name field required");
    }
    if (!ingredients) {
      throw new Error("ingredients field required");
    }
    if (!duration) {
      throw new Error("duration field required");
    }
    if (!category) {
      throw new Error("category field required");
    }

    const recipe = await Recipe.create({
      recipeName,
      ingredients,
      duration,
      category,
    });

    return recipe;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

async function findRecipeById(id) {
  try {
    if (!id) {
      throw new Error("Id not found");
    }

    const recipe = await Recipe.findById(id).exec();
    return recipe;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

async function findAllRecipe(category) {
  try {
    let filter = {};

    if (category) filter.category = category;
    const allRecipes = await Recipe.find(filter);
    return allRecipes;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { addRecipe, findRecipeById, findAllRecipe };
