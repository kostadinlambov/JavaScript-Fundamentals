function isPalindrome(str) {
    let reversed = str.split('')
        .reverse()
        .join('');

    return reversed === str;
}

console.log(isPalindrome('abba'));
console.log(isPalindrome('asdfacfd'));