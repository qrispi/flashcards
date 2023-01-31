class Turn {
    constructor(playerGuess, cardObj) {
        this.guess = playerGuess
        this.card = cardObj
    }

    returnGuess() {
        return this.guess
    }

    returnCard() {
        return this.card
    }

    evaluateGuess() {
        return this.guess === this.card.correctAnswer
    }

    giveFeedback() {
        return this.evaluateGuess() ? 'correct!' : 'incorrect!'
    }
}

module.exports = Turn