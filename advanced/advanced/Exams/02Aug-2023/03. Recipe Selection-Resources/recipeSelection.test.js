const recipeSelection = require("./recipeSelection");
const { expect } = require('chai');

describe("Tests Recipe Selection", function () {
    describe("Is Type Suitable functionality", function () {

        it("checks for invalid input", function () {
            expect(() => recipeSelection.isTypeSuitable('a', 1)).to.throw("Invalid input")
            expect(() => recipeSelection.isTypeSuitable(1, 'a')).to.throw("Invalid input")
        });

        it('checks if recipe if suitable for vegetarians', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal("This recipe is not suitable for vegetarians");
        })
        it('checks if recipe if suitable for vegans', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal("This recipe is not suitable for vegans");
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal("This recipe is not suitable for vegans");
        })
        it('recipe is suitable', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'a')).to.equal("This recipe is suitable for your dietary restriction");
            expect(recipeSelection.isTypeSuitable('Dairy', 'a')).to.equal("This recipe is suitable for your dietary restriction");
        })
    });


    describe("Is It Affordable functionality", function () {
        it("checks for invalid input", function () {
            expect(() => recipeSelection.isItAffordable('a', 1)).to.throw("Invalid input")
            expect(() => recipeSelection.isItAffordable(1, 'a')).to.throw("Invalid input")
        });

        it('checks if u have enough budget', () => {
            expect(recipeSelection.isItAffordable(2, 1)).to.equal("You don't have enough budget to afford this recipe");
            expect(recipeSelection.isItAffordable(1, 2)).to.equal("Recipe ingredients bought. You have 1$ left");
        })
    });

    describe("Get Recipes By Category functionality", function () {
        it("checks for invalid input", function () {
            expect(() => recipeSelection.getRecipesByCategory('a', 'a')).to.throw("Invalid input")
            expect(() => recipeSelection.getRecipesByCategory(1, 'a')).to.throw("Invalid input")
            expect(() => recipeSelection.getRecipesByCategory([], 1)).to.throw("Invalid input")
            expect(() => recipeSelection.getRecipesByCategory([], {})).to.throw("Invalid input")
        });

        it('checks if returned array is equal', () => {
            const recipes = [
                { title: "Spicy Tofu Stir-Fry", category: "Asian" },
                { title: "Asian Beans", category: "Asian" },
                { title: "Razqdka", category: "Bulgarian" }]

            const filteredRecipes = ["Spicy Tofu Stir-Fry","Asian Beans"]

            expect(recipeSelection.getRecipesByCategory(recipes, 'Asian')).to.deep.equal(filteredRecipes)
        })
    });
});
