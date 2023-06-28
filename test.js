function catalogue(input) {
    let catalogue = input.reduce((acc, curr) => {
        const letter = curr.charAt(0);
        acc[letter] = [];
        return acc;
    }, {});
 
    input.forEach(x => {
        const letter = x.charAt(0);
        const formatted = x.split(" : ").join(": ");
        catalogue[letter].push(formatted);
    });
 
    catalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));
 
    catalogue.forEach(x => {
        console.log(`${x[0]}
        ${x[1].sort((a, b) => a.localeCompare(b)).join("\n  ")}`)
    });
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)