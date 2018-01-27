function moviePrice(inputArr) {
    let movieName = inputArr[0].toLowerCase();
    let dayOfweek = inputArr[1].toLowerCase();
    let price = 0;

    switch (dayOfweek) {
        case 'monday':
            if (movieName === 'the godfather') {
                console.log(12);
            } else if (movieName === 'schindler\'s list') {
                price = 8.50;
                console.log(price.toFixed(2));
            } else if (movieName === 'casablanca') {
                console.log(8);
            } else if (movieName === 'the wizard of oz') {
                console.log(10);
            } else {
                console.log("error")
            }
            break;
        case 'tuesday':
            if (movieName === 'the godfather') {
                console.log(10);
            } else if (movieName === 'schindler\'s list') {
                price = 8.50;
                console.log(price.toFixed(2));
            } else if (movieName === 'casablanca') {
                console.log(8);
            } else if (movieName === 'the wizard of oz') {
                console.log(10);
            } else {
                console.log("error")
            }
            break;
        case 'wednesday':
            if (movieName === 'the godfather') {
                console.log(15);
            } else if (movieName === 'schindler\'s list') {
                price = 8.50;
                console.log(price.toFixed(2));
            } else if (movieName === 'casablanca') {
                console.log(8);
            } else if (movieName === 'the wizard of oz') {
                console.log(10);
            } else {
                console.log("error");
            }
            break;
        case 'thursday':
            if (movieName === 'the godfather') {
                price = 12.50;
                console.log(price.toFixed(2));
            } else if (movieName === 'schindler\'s list') {
                price = 8.50;
                console.log(price.toFixed(2));
            } else if (movieName === 'casablanca') {
                console.log(8);
            } else if (movieName === 'the wizard of oz') {
                console.log(10);
            } else {
                console.log("error");
            }
            break;
        case 'friday':
            if (movieName === 'the godfather') {
                console.log(15);
            } else if (movieName === 'schindler\'s list') {
                price = 8.50;
                console.log(price.toFixed(2));
            } else if (movieName === 'casablanca') {
                console.log(8);
            } else if (movieName === 'the wizard of oz') {
                console.log(10);
            } else {
                console.log("error");
            }
            break;
        case 'saturday':
            if (movieName === 'the godfather') {
                console.log(25);
            } else if (movieName === 'schindler\'s list') {
                console.log(15);
            } else if (movieName === 'casablanca') {
                console.log(10);
            } else if (movieName === 'the wizard of oz') {
                console.log(15);
            } else {
                console.log("error");
            }
            break;
        case 'sunday':
            if (movieName === 'the godfather') {
                console.log(30);
            } else if (movieName === 'schindler\'s list') {
                console.log(15);
            } else if (movieName === 'casablanca') {
                console.log(10);
            } else if (movieName === 'the wizard of oz') {
                console.log(15);
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
    }
}

moviePrice(['Schindler\'s LIST', 'monday']);