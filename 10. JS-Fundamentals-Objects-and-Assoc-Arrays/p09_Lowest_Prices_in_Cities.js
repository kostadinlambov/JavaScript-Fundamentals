function lowestPriceInCities(strArr) {
    let productsMap = new Map();

    for (let line of strArr) {
        let tokens = line.split(/\s*\|\s*/g);
        let [town, product, price] = tokens;

        if (!productsMap.has(product)) {
            productsMap.set(product, new Map());
        }

        productsMap.get(product).set(town, Number(price));
    }

    [...productsMap].forEach(([product, towns]) => {
        let [town, price] = [...towns].reduce((firstTown, secondTown) => {
            if (firstTown[1] > secondTown[1]) {
                return secondTown
            }
            return firstTown
        });
        console.log(`${product} -> ${price} (${town})`);
    })
}

lowestPriceInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
