function printBill(arr) {
    let products = arr.filter((e, i) => i % 2 === 0);
    let prices = arr.filter((e, i) => i % 2 === 1).map(Number);

    console.log(`You purchased ${products.join(', ')} for a total sum of ${prices.reduce((a, b) => a+b)}`)
}


printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);