function produceJuices(strArr) {
    let juiceMap = new Map();
    let juiceOrderToPrint = new Set();

    for (let currentJuice of strArr) {
        let [juiceName, juiceQuantity] = currentJuice.split(/\s+=>\s+/);
        if(!juiceMap.has(juiceName)){
            juiceMap.set(juiceName, 0);
        }
        juiceMap.set(juiceName, juiceMap.get(juiceName) + Number(juiceQuantity));

        if(juiceMap.get(juiceName) / 1000 >= 1){
           juiceOrderToPrint.add(juiceName);
        }

    }

    for(let juice of juiceOrderToPrint){
        let juiceQuantity = juiceMap.get(juice);
        let bottles = Math.floor(juiceQuantity / 1000);
        console.log(`${juice} => ${bottles}`);
    }
}

produceJuices([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

produceJuices([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);