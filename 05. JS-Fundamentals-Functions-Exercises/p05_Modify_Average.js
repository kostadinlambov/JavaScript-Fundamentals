function modifyAverage(num) {
    let result = num.toString();

    while(true){
        let sum = 0;
        for (let i = 0; i < result.length; i++) {
            sum += Number.parseInt(result[i])
        }

        if(sum / 5 > result.length){
            console.log(result)
            break;
        }else{
            result += '9'
        }
    }
}

modifyAverage(101)
modifyAverage(5835)