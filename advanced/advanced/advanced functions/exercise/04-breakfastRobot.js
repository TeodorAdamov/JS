function solution() {

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    function management(instruction) {
        let result;
        const [command, ...rest] = instruction.split(' ');

        if (command === 'restock') {
            let [element, quantity] = rest
            restock(element, quantity)
            result = 'Success'
        } else if (command === 'prepare') {
            let [recipe, quantity] = rest;
            result = prepare(recipe, quantity)
        } else if (command === 'report') {
            result = report()
        }

        return result;
    }

    function report() {
        let string = '';

        for (let key in ingredients) {
            string += `${key}=${ingredients[key]} `
        }
        return string.trim()
    }

    function restock(element, quantity) {
        ingredients[element] += Number(quantity);
    }

    function prepare(inputRecipe, quantity) {
        const neededIngredients = {}

        const recipe = recipes[inputRecipe]

        for (let ingredient in recipe) {
            if (ingredient === 'carbohydrate') {
                neededIngredients[ingredient] = recipe[ingredient] * Number(quantity);
            } else if (ingredient === 'protein') {
                neededIngredients[ingredient] = recipe[ingredient] * Number(quantity);
            } else if (ingredient === 'fat') {
                neededIngredients[ingredient] = recipe[ingredient] * Number(quantity);
            } else if (ingredient === 'flavour') {
                neededIngredients[ingredient] = recipe[ingredient] * Number(quantity);
            }
        }

        for (let ingredient in neededIngredients) {
            if (ingredients[ingredient] < neededIngredients[ingredient]) {
                return `Error: not enough ${ingredient} in stock`
            }
            ingredients[ingredient] -= neededIngredients[ingredient]

        }
        return 'Success'
    }


    return management
}


let manager = solution();
console.log(manager('restock carbohydrate 10')); // Success 
console.log(manager('restock flavour 10')); // Success 
console.log(manager('prepare apple 1')); // Success 
console.log(manager('restock fat 10')); // success
console.log(manager('prepare burger 1'));
console.log(manager('report'));

