function concatenateAndReverse(arr) {
    let result = '';
    arr.reverse().forEach(e => {
       // result += e.split('').reverse().join('');
        result += Array.from(e).reverse().join('');
    });
    console.log(result)
}
concatenateAndReverse(['I', 'am', 'student']);