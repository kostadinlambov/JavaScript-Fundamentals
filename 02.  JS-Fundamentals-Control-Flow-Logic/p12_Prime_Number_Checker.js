function isPrime(num) {
    let prime = true;
    let max = Math.ceil(Math.sqrt(num));

    for (let i = 2; i < max; i++) {
        if(num % i === 0){
            prime =  false;
            break;
        }
    }
    return prime && num > 1
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(919));