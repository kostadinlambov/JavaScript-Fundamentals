function processingCrystals(arr) {
    let targetThickness = arr[0];

    let cut = crystalThickness => crystalThickness / 4;
    let lap = crystalThickness => crystalThickness - (crystalThickness * 20) / 100;
    let grind = crystalThickness => crystalThickness - 20;
    let etch = crystalThickness => crystalThickness - 2;
    let xRay = crystalThickness => crystalThickness + 1;
    let transportAndWashing = crystalThickness => Math.floor(crystalThickness);

    let result = '';
    for (let i = 1; i < arr.length; i++) {
        let currentCrystalThickness = arr[i];

        result += `Processing chunk ${currentCrystalThickness} microns\n`;

        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        let xRayCount = 0;
        while (currentCrystalThickness !== targetThickness) {
            if (cut(currentCrystalThickness) >= targetThickness - 1) {
                currentCrystalThickness = cut(currentCrystalThickness);
                cutCount++;
                if (cut(currentCrystalThickness) < targetThickness) {
                    currentCrystalThickness = transportAndWashing(currentCrystalThickness)
                }
            } else if (lap(currentCrystalThickness) >= targetThickness - 1) {
                currentCrystalThickness = lap(currentCrystalThickness);
                lapCount++;
                if (lap(currentCrystalThickness) < targetThickness) {
                    currentCrystalThickness = transportAndWashing(currentCrystalThickness)
                }
            } else if (grind(currentCrystalThickness) >= targetThickness - 1) {
                currentCrystalThickness = grind(currentCrystalThickness);
                grindCount++;
                if (grind(currentCrystalThickness) < targetThickness) {
                    currentCrystalThickness = transportAndWashing(currentCrystalThickness)
                }
            } else if (etch(currentCrystalThickness) >= targetThickness - 1) {
                currentCrystalThickness = etch(currentCrystalThickness);
                etchCount++;
                if (etch(currentCrystalThickness) < targetThickness) {
                    currentCrystalThickness = transportAndWashing(currentCrystalThickness)
                }
            } else if (currentCrystalThickness + 1 === targetThickness) {
                currentCrystalThickness = xRay(currentCrystalThickness);
                xRayCount++;
            }
        }

        if (cutCount > 0) {
            result += `Cut x${cutCount}\n`;
            result += `Transporting and washing\n`;
        }
        if (lapCount > 0) {
            result += `Lap x${lapCount}\n`;
            result += `Transporting and washing\n`;
        }
        if (grindCount > 0) {
            result += `Grind x${grindCount}\n`;
            result += `Transporting and washing\n`;
        }
        if (etchCount > 0) {
            result += `Etch x${etchCount}\n`;
            result += `Transporting and washing\n`;
        }
        if (xRayCount > 0) {
            result += `X-ray x${xRayCount}\n`;
        }
        result += `Finished crystal ${currentCrystalThickness} microns\n`;

    }

    console.log(result);
}

processingCrystals([1375, 50000]);
processingCrystals([1000, 4000, 8100]);