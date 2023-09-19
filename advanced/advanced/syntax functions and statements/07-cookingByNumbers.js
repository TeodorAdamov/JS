function cookingByNumbers(num, ...operators) {
    let x = Number(num);

    const operations = {
        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x * 3,
        fillet: x => {
            const subtract = x * 0.2;
            return x - subtract;
        }
    }


    operators.forEach((_, i) => {
        x = operations[operators[i]](x);
        console.log(x);
    })
    
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop' 
)