function carsDatabase(strArr) {
    let carMap = new Map();

    for (let tokens of strArr) {
        let [carBrand, carModel, producedCars] = tokens.split(/\s+\|\s+/);

        if (!carMap.has(carBrand)) {
            carMap.set(carBrand, new Map());
        }
        if (!carMap.get(carBrand).has(carModel)) {
            carMap.get(carBrand).set(carModel, 0);
        }

        carMap.get(carBrand).set(carModel, carMap.get(carBrand).get(carModel) + Number(producedCars));
    }

    for (let [key, value] of carMap) {
        console.log(key);
        for (let [model, producedCars] of value) {
            console.log(`###${model} -> ${producedCars}`);
        }
    }
}

carsDatabase([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
]);