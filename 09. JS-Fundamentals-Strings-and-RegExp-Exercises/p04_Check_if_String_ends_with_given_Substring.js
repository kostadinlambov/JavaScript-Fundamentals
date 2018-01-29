function checkEndSequence(str, subStr) {
    return str.endsWith(subStr)? console.log(true) : console.log(false);
}

checkEndSequence('How have you been?', 'how');
checkEndSequence('The quick brown fox…', 'The quick brown fox…');
checkEndSequence('The new iPhone has no headphones jack.', 'o headphones jack.');