'use strict'
function countLetters(str, letter) {
    let count = 0

    for (var i = 0; i < str.length; i++) {
       if(str[i] === letter){
           count++
       }
    }
        return count
}


console.log(countLetters("Peshoooooo", 'o'))