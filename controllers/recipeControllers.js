import {
  addRecipe,
  findRecipeById,
  findAllRecipe,
} from "../services/recipeServices.js";

export const createRecipe = async (req, res) => {
  try {
    const { recipeName, ingredients, duration, category } = req.body;

    const newRecipe = await addRecipe(
      recipeName,
      ingredients,
      duration,
      category
    );
    res.status(201).json({
      status: "success",
      data: {
        recipe: newRecipe,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

export const findRecipebyId = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.params);
    const recipe = await findRecipeById(id);
    res.status(200).json({
      status: "sucess",
      data: {
        recipe: recipe,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: {
        error: error.message,
      },
    });
  }
};

export const findAll = async (req, res) => {
  try {
    const category = req.query.category;
    const recipes = await findAllRecipe(category);
    res.status(200).json({
      status: "sucess",
      data: {
        recipes: recipes,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: {
        error: error.message,
      },
    });
  }
};
