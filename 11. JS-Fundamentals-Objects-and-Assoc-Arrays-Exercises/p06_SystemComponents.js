function systemComponents(strArr) {
    let systemMap = new Map();

    for (let element of strArr) {
        [systemName, componentName, subcomponentName] = element.split(/\s+\|\s+/);

        if (!systemMap.has(systemName)) {
            systemMap.set(systemName, new Map());
        }
        if (!systemMap.get(systemName).has(componentName)) {
            systemMap.get(systemName).set(componentName, []);
        }
        systemMap.get(systemName).get(componentName).push(subcomponentName);
    }

    let sortedMap = new Map([...systemMap].sort((a, b) => {
        let firstSystemSize = [...a[1]].length;
        let secondSystemSize = [...b[1]].length;
        if (firstSystemSize === secondSystemSize) {
            return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
        } else if (firstSystemSize < secondSystemSize) {
            return 1;
        }
        return -1;
    }));

    for (const [system, components] of sortedMap) {
        sortedMap.set(system, new Map([...components].sort((x, y) => [...y[1]].length - [...x[1]].length)))
    }

    for(let [system, componentMap] of sortedMap){
        console.log(system);
        for(let [component, subComponentArr] of componentMap){
            console.log(`|||${component}`);
            for(let subComponent of subComponentArr){
                console.log(`||||||${subComponent}`);
            }
        }
    }
}


systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);