function processingCrystals(arr) {
    let targetThickness = arr[0];

    let cut = crystalThicKness => crystalThicKness / 4;
    let lap = crystalThicKness => crystalThicKness - (crystalThicKness * 20) / 100;
    let grind = crystalThicKness => crystalThicKness - 20;
    let etch = crystalThicKness => crystalThicKness - 2;
    let xRay = crystalThicKness => crystalThicKness + 1;
    let transporAndWashing = crystalThicKness => Math.floor(crystalThicKness);

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
                    currentCrystalThickness = transporAndWashing(currentCrystalThickness)
                }
            } else if (lap(currentCrystalThickness) >= targetThickness - 1) {
                currentCrystalThickness = lap(currentCrystalThickness);
                lapCount++;
                if (lap(currentCrystalThickness) < targetThickness) {
                    currentCrystalThickness = transporAndWashing(currentCrystalThickness)
                }
            } else if (grind(currentCrystalThickness) >= targetThickness - 1) {
                currentCrystalThickness = grind(currentCrystalThickness);
                grindCount++;
                if (grind(currentCrystalThickness) < targetThickness) {
                    currentCrystalThickness = transporAndWashing(currentCrystalThickness)
                }
            } else if (etch(currentCrystalThickness) >= targetThickness - 1) {
                currentCrystalThickness = etch(currentCrystalThickness);
                etchCount++;
                if (etch(currentCrystalThickness) < targetThickness) {
                    currentCrystalThickness = transporAndWashing(currentCrystalThickness)
                }
            } else if (currentCrystalThickness + 1 === targetThickness) {
                currentCrystalThickness = xRay(currentCrystalThickness);
                xRayCount++;
            }
        }

        if (cutCount > 0) {
            result += `Cut x${cutCount}\n`;
            result += `Transporting and washing\n`
        }
        if (lapCount > 0) {
            result += `Lap x${lapCount}\n`;
            result += `Transporting and washing\n`
        }
        if (grindCount > 0) {
            result += `Grind x${grindCount}\n`;
            result += `Transporting and washing\n`
        }
        if (etchCount > 0) {
            result += `Etch x${etchCount}\n`;
            result += `Transporting and washing\n`
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