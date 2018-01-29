function checkStartSequence(str, subStr) {
    return str.startsWith(subStr)? console.log(true) : console.log(false);
}

checkStartSequence('How have you been?', 'how');
checkStartSequence('The quick brown fox…', 'The quick brown fox…');