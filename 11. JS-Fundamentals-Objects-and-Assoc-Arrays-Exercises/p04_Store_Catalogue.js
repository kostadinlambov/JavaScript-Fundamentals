function storeCatalogue(strArr) {
    let productsMap = new Map();

    for (let product of strArr) {
        let [productName, price] = product.split(/\s+:\s+/);
        productsMap.set(productName, Number(price));
    }

    let sortedMap = new Map([...productsMap].sort((a,b) => a[0].localeCompare(b[0])));

    let lastFirstChar = '';

    for (let [product, price] of sortedMap) {
        let currentFirstChar = product.charAt(0);

        if (currentFirstChar !== lastFirstChar) {
            console.log(currentFirstChar);
            lastFirstChar = currentFirstChar;
        }

        console.log(`  ${product}: ${price}`);
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

// storeCatalogue([
//     'Banana : 2',
//     'Rubic\'s Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10',
// ]);