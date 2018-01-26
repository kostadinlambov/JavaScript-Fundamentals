function addNumbers(arr = []) {
    arr = arr.map(Number);
    result = [];

   for(let number of arr){
       if(number>= 0){
           result.push(number)
       }else{
           result.unshift(number)
       }
   }
   return result.join('\n')
}

console.log(addNumbers([7, -2, 8, 9]));
console.log(addNumbers([3, -2, 0, -1]));