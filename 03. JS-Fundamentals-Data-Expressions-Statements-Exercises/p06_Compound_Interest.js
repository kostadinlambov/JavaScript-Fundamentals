function calculateCompoundInterest([principalSum, interestRate, compoundingPeriod, totalTimeSpan]) {

    [principalSum, interestRate, compoundingPeriod, totalTimeSpan] =
        [ principalSum, interestRate, compoundingPeriod, totalTimeSpan].map(Number);

    interestRate /= 100;
    let compoundingFrequency = 12 / compoundingPeriod;

    let compoundInterest = principalSum
        * Math.pow((1 + interestRate/compoundingFrequency ),totalTimeSpan*compoundingFrequency);

    console.log(compoundInterest.toFixed(2));
}

calculateCompoundInterest(['1500', '4.3', '3', '6']);
