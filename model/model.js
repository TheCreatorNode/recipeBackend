import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    required: [true, "recipe name is required"],
    // unique: true,
  },
  ingredients: {
    type: [String],
    required: [true, "ingredients is required"],
  },
  duration: {
    type: String,
    required: [true, "duration name field is required"],
  },
  category: {
    type: String,
    required: [true, "duration field is required"],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = model("Recipe", recipeSchema, "recipes");

export default Recipe;
