function calculateCompoundInterest(inputArr) {
    let principalSum = inputArr[0];
    let interestRate  = inputArr[1] / 100;
    let compoundingPeriod   = inputArr[2];
    let totalTimespan   = inputArr[3];

    let compoundingFrequency = 12 / compoundingPeriod;

    let compoundInterest = principalSum
        * Math.pow((1 + interestRate/compoundingFrequency ),totalTimespan*compoundingFrequency);

    console.log(compoundInterest.toFixed(2));
}

calculateCompoundInterest([1500, 4.3, 3, 6]);