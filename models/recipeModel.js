const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  category: { type: String },
  ingredients: { type: [String] },
  instructions: { type: String },
  preparationTime: { type: String },
  servings: { type: Number },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
