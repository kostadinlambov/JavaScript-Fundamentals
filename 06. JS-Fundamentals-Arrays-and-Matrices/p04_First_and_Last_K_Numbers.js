function firstLastKElements(arr = []) {
    let k = Number(arr.shift());

    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(arr.length-k,arr.length).join(' '));
}

firstLastKElements([2, 7, 8, 9]);
firstLastKElements([3, 6, 7, 8, 9]);
