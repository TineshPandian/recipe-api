const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Define routes
router.get('/', recipeController.getAllRecipes); // GET /api/recipes
router.get('/:id', recipeController.getRecipeById); // GET /api/recipes/:id
router.post('/', recipeController.addRecipe); // POST /api/recipes
router.put('/:id', recipeController.updateRecipe); // PUT /api/recipes/:id
router.delete('/:id', recipeController.deleteRecipe); // DELETE /api/recipes/:id

module.exports = router;
