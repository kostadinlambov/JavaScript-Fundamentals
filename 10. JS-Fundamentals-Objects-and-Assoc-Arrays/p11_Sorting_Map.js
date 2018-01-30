function systemComponents(components) {
    let systems = new Map();

    for (const row of components) {
        let [system, component, subComponent] = row.split(' | ');

        if (!systems.has(system)) {
            systems.set(system, new Map());
        }

        if (!systems.get(system).has(component)) {
            systems.get(system).set(component, []);
        }

        systems.get(system).get(component).push(subComponent);
    }

    systems = new Map([...systems].sort((x, y) => {
        if ([...x[1]].length === [...y[1]].length) {
            if (x[0] > y[0]) {
                return 1;
            }
            if (x[0] < y[1]) {
                return -1;
            }
            return 0;
        }

        return [...x[1]].length > [...y[1]].length ? -1 : 1
    }));

    for (const [component, subComponents] of systems) {
        systems.set(component, new Map([...subComponents].sort((x, y) => [...y[1]].length - [...x[1]].length)))
    }

    for (const [system, components] of systems) {
        console.log(system);
        for (const [component, subComponents] of components) {
            console.log(`|||${component}`);
            for (const subComponent of subComponents) {
                console.log(`||||||${subComponent}`)
            }
        }
    }
}
