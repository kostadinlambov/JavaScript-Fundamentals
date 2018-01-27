function convertImperialUnits(foot) {
    let inch = Math.floor(foot / 12);
    let remainder = foot % 12;

    console.log(`${inch}'-${remainder}"`);
}

convertImperialUnits(11);