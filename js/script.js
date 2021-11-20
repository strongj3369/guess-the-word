const guessedLettersElement = document.querySelector('.guessed-letters')
const guessLetterButton = document.querySelector('.guess')
const letterInput = document.querySelector('.letter')
const wordInProgress = document.querySelector('.word-in-progress')
const remainingGuessesElement = document.querySelector('.remaining')
const remainingGuessesSpan = document.querySelector('.remaining span')
const message = document.querySelector('.message')
const playAgainButton = document.querySelector('.play-again')

const word = 'magnolia'
const guessedLetters = []
let remainingGuesses = 8

const placeholder = function (word) {
	const placeholderLetters = []
	for (const letter of word) {
		console.log(letter)
		placeholderLetters.push('●')
	}
	wordInProgress.innerText = placeholderLetters.join('')
}

placeholder(word)

guessLetterButton.addEventListener('click', function (e) {
	e.preventDefault()

	message.innerText = ''

	const guess = letterInput.value

	const goodGuess = validateInput(guess)

	if (goodGuess) {
		makeGuess(guess)
	}
	letterInput.value = ''
})

const validateInput = function (input) {
	const acceptedLetter = /[a-zA-Z]/
	if (input.length === 0) {
		message.innerText = 'Please enter a letter.'
	} else if (input.length > 1) {
		message.innerText = 'Please enter a single letter.'
	} else if (!input.match(acceptedLetter)) {
		message.innerText = 'Please enter a letter from A to Z.'
	} else {
		return input
	}
}

const makeGuess = function (guess) {
	guess = guess.toUpperCase()
	if (guessedLetters.includes(guess)) {
		message.innerText = 'You already guessed that letter, silly. Try again.'
	} else {
		guessedLetters.push(guess)
		console.log(guessedLetters)
	}
}

const updatePage = function () {
	guessedLettersElement.innerHTML = ''
	for (const letter of guessedLetters) {
		const li = document.createElement('li')
		li.innerText = letter
		guessedLettersElement.append(li)
	}
}

const updateWordInProgress = function (guessedLetters) {
	const wordUpper = word.toUpperCase()
	const wordArray = wordUpper.split('')
	const revealWord = []
	for (const letter of wordArray) {
		if (guessedLetters.includes(letter)) {
			revealWord.push(letter.toUpperCase())
		} else {
			revealWord.push('●')
		}
	}
	wordInProgress.innerText = revealWord.join('')
	checkIfWin()
}

const updateGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
      // womp womp - bad guess, lose a chance
      message.innerText = `Sorry, the word has no ${guess}.`;
      remainingGuesses -= 1;
    } else {
      message.innerText = `Good guess! The word has the letter ${guess}.`;
    }
  
    if (remainingGuesses === 0) {
      message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
    } else if (remainingGuesses === 1) {
      remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
    } else {
      remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    }
  };
  
  const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
      message.classList.add("win");
      message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
  };