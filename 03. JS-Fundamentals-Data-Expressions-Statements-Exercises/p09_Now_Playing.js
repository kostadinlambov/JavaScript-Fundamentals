function nowPlaying(inputArr) {
    let trackName = inputArr[0];
    let artistName = inputArr[1];
    let duration = inputArr[2];
    let outputString = `Now Playing: ${artistName} - ${trackName} [${duration}]`;
    console.log(outputString)
}

nowPlaying(['Number One', 'Nelly', '4:09']);