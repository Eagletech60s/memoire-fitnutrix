document.addEventListener("DOMContentLoaded", function() {
    const recipeModal = document.getElementById("modal");
    const addRecipeModal = document.getElementById("addRecipeModal");
    const suggestRecipeBtns = document.querySelectorAll(".suggest-button");
    const closeButtons = document.querySelectorAll(".close");
    const addRecipeBtn = document.getElementById("addRecipe");

    for (const btn of suggestRecipeBtns) {
        btn.addEventListener("click", function() {
            recipeModal.classList.remove("hidden");
        });
    }

    for (const btn of closeButtons) {
        btn.addEventListener("click", function() {
            recipeModal.classList.add("hidden");
            addRecipeModal.classList.add("hidden");
        });
    }

    addRecipeBtn.addEventListener("click", function() {
        recipeModal.classList.add("hidden");
        addRecipeModal.classList.remove("hidden");
    });
});
