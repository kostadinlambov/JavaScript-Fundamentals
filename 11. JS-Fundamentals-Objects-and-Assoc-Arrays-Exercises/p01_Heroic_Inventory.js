function heroicInventory(strArr) {
    let outputArr = [];
    for (let str of strArr) {
        let [names, level, items] = str.split(/\s*\/\s*/g);
        let currentItems = [];
        if (items !== undefined) {
            currentItems = items.split(/, /g);
        }
        let obj = {
            name: names,
            level: Number(level),
            items: currentItems,
        };

        outputArr.push(obj);
    }

    let str = JSON.stringify(outputArr);
    console.log(str);
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara '
]);