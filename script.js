document.getElementById("search-input").addEventListener("input", function() {
    var searchTerm = this.value.toLowerCase();
    var recipes = document.getElementsByClassName("card");
  
    for (var i = 0; i < recipes.length; i++) {
      var recipe = recipes[i];
      var recipeId = recipe.id.toLowerCase();
  
      if (recipeId.includes(searchTerm)) {
        recipe.style.display = "block";
      } else {
        recipe.style.display = "none";
      }
    }
  });
  