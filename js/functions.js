function generateArrayOfLetters(stringOfLetters) {
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
            htmlOutPut += `<td> <button id=${letter} onClick="handleClickOnLetter('${letter}')> ${letter} </button> </td>`;
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

document.getElementById("letter-buttons-wrapper").innerHTML = generateArrayOfLetters(stringOfLetters);

function getRandomEmotionObject(arrayOfEmotions){
    let randomEmotionObject = arrayOfEmotions[Math.floor(Math.random()*arrayOfEmotions.length)];
    return randomEmotionObject;
}

function guessedWord(randomName, guessedLetters) {
    let randomNameStatus = null;
    let lettersArray = randomName.split('');
    for (var i=0; i<lettersArray.length; i++)
    {
        var letter = lettersArray[i];
        if (guessedLetters.indexOf(letter)) {
            randomNameStatus += letter;
        } else {
            randomNameStatus += "_";
        }
    }
    return randomNameStatus;
}

function handleClickOnLetter(selectedLetter, guessedLetters, randomName, numberOfMistakes) {
    guessedLetters.push(selectedLetter);
    document.getElementById(selectedLetter).setAttribute('disabled', true);
    if (randomName.indexOf(selectedLetter) >= 0) {
        guessedWord(randomName, selectedLetter);
        return numberOfMistakes;
    } else {
        return numberOfMistakes++;
    }
}