const letter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetter = document.querySelector(".letter");
const progressWord = document.querySelector(".word-in-progress");
const remainGuess = document.querySelector(".remaining");
const spanGuess = document.querySelector(".remaining span");
const playerMessage = document.querySelector(".message");
const hiddenButton = document.querySelector (".play-again");

const word = "magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }

    progressWord.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e){
    e.preventDefault();
    const guess = guessLetter.value;
    console.log(guess)
    guessLetter.value = "";
});
