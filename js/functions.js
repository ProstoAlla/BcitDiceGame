function generateArrayOfLetters() {
    let index = 0;
    let maxIndex = 9;
    let htmlOutPut = "<table>";
    let arrayOfLetters = stringOfLetters.split('');
    for (let i = 0; i < arrayOfLetters.length; i++) {
        const letter = arrayOfLetters[i];
        const letterOutPut = `<td> <button id=${letter} onClick="handleClickOnLetter('${letter}')"> ${letter} </button> </td>`;
        if (index === 0) {
            htmlOutPut += "<tr>";
            htmlOutPut += letterOutPut;
            index++;
        } else if (index !== 0 && index < maxIndex) {
            htmlOutPut += letterOutPut;
            index++
        } else {
            htmlOutPut += "</tr><tr>";
            htmlOutPut += letterOutPut;
            index = 1;
        }
    }
    htmlOutPut += "</tr>";
    htmlOutPut += "</table>";
    return htmlOutPut;
}

function getRandomEmotionObject() {
    let randomEmotionObject = arrayOfEmotions[Math.floor(Math.random() * arrayOfEmotions.length)];
    return randomEmotionObject;
}

function guessedWord() {
    const randomName = currentGameState.getRandomName();
    const guessedLetters = currentGameState.getGuessedLetters();
    let randomNameStatus = "<div>";
    let lettersArray = randomName.split('');
    for (var i = 0; i < lettersArray.length; i++) {
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
    if (currentGameState.getIsGameEnd()) {
        showEndGameMessage(currentGameState.getIsWinner());
        return;
    }
    currentGameState.addNewGuessedLetter(selectedLetter);
    document.getElementById(selectedLetter).setAttribute('disabled', true);
    if (currentGameState.getRandomName().indexOf(selectedLetter) >= 0) {
        const word = guessedWord();
        if (word.indexOf('_') < 0) {
            currentGameState.setWinner(true);
            currentGameState.setGameEnd(true);
        }
        document.getElementById('hangman-word-section').innerHTML = word;
    } else {
        currentGameState.increaseNumberOfMistakes();
        document.getElementById("wrong-number-id").innerHTML = `<span id="wrong-number-id">${currentGameState.getNumberOfMistakes()}</span>`;
        document.getElementById("hangman-image").src=`images/image${currentGameState.getNumberOfMistakes()}.jpeg`;
        if (currentGameState.getNumberOfMistakes() === MAX_WRONG_ANSWERS) {
            currentGameState.setGameEnd(true);
            currentGameState.setWinner(false);
        }
    }
    if (currentGameState.getIsGameEnd()) {
        showEndGameMessage(currentGameState.getIsWinner());
    }
}

function showEndGameMessage(isWinner) {
    let messageText;
    if (isWinner) {
        messageText = 'Congratulations, you won!!';
    } else {
        messageText = 'Sorry, you loose. Please try again. Press reset button.';
    }
    document.getElementById('game-end-text').innerHTML = `<p id="game-end-text">${messageText}</p>`;
    document.getElementById('answer-word-id').innerHTML = `<p id="answer-word-id">Correct answer is ${currentGameState.getRandomName()}.</p>`;
    document.getElementById('answer-image-id').src = `images/${currentGameState.getRandomName()}.jpeg`;
    modal.style.display = "block";
}

function resetGame() {
    document.getElementById("letter-buttons-wrapper").innerHTML = generateArrayOfLetters();
    currentGameState = new GameState(getRandomEmotionObject());
    document.getElementById('hangman-word-section').innerHTML = guessedWord();
    document.getElementById('hint-id').innerHTML = `<div id="hint-id">${currentGameState.getRandomHint()}</div>`;
    document.getElementById('wrong-number-id').innerHTML = `<span id="wrong-number-id">0</span>`;
    document.getElementById("hangman-image").src=`images/image${currentGameState.getNumberOfMistakes()}.jpeg`;
}

var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
