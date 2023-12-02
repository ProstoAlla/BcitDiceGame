function generateArrayOfLetters() {
    let index = 0;
    let maxIndex = 9;
    let htmlOutPut = "<table>";
    let arrayOfLetters = stringOfLetters.split('');
    for (let i = 0; i < arrayOfLetters.length; i++) {
        if (index === 0) {
            htmlOutPut += "<tr>";
        };
        if (index < maxIndex) {
            let letter = arrayOfLetters[i];
            htmlOutPut += `<td> <button id=${letter} onClick="handleClickOnLetter('${letter}')"> ${letter} </button> </td>`;
            index++
        } else {
            htmlOutPut += "</tr>";
            index = 0;
        }
    }
    htmlOutPut += "</tr>";
    htmlOutPut += "</table>";
    return htmlOutPut;
}

function getRandomEmotionObject(){
    let randomEmotionObject = arrayOfEmotions[Math.floor(Math.random()*arrayOfEmotions.length)];
    return randomEmotionObject;
}

function guessedWord() {
    const randomName = currentGameState.getRandomName();
    const guessedLetters = currentGameState.getGuessedLetters();
    let randomNameStatus = "<div>";
    let lettersArray = randomName.split('');
    for (var i=0; i<lettersArray.length; i++)
    {
        var letter = lettersArray[i];
        if (guessedLetters.indexOf(letter) >= 0) {
            randomNameStatus += (" " + letter + " ");
        } else {
            randomNameStatus += " _ ";
        }
    }
    return randomNameStatus + "</div>";
}

function handleClickOnLetter(selectedLetter) {
    currentGameState.addNewGuessedLetter(selectedLetter);
    document.getElementById(selectedLetter).setAttribute('disabled', true);
    if (currentGameState.getRandomName().indexOf(selectedLetter) >= 0) {
        document.getElementById('hangman-word-section').innerHTML=guessedWord();
    } else {
        currentGameState.increaseNumberOfMistakes();
    }
    alert("Current state is " + currentGameState);
    //TODO: add logic to check if game is done
}

function resetGame() {
    document.getElementById("letter-buttons-wrapper").innerHTML = generateArrayOfLetters();
    currentGameState = new GameState(getRandomEmotionObject());
    document.getElementById('hangman-word-section').innerHTML=guessedWord();
}