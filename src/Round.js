const Turn = require('../src/Turn')

class Round {
    constructor(newDeck) {
        this.currentDeck = newDeck
        this.currentCard = newDeck.cards[0]
        this.turns = 0
        this.incorrectGuesses = []
    }

    returnCurrentCard() {
        return this.currentCard
    }

    takeTurn(guess) {
        let currentTurn = new Turn(guess, this.currentCard)
        this.turns++
        if (guess !== currentTurn.card.correctAnswer) {
            this.incorrectGuesses.push(currentTurn.card.id)
        }
        this.currentCard = this.currentDeck.cards[this.turns]
        return currentTurn.giveFeedback()
    }

    calculatePercentCorrect() {
        if (this.turns < 1) {
            return 0
        }
        if (this.turns > 0 && this.incorrectGuesses.length < 1) {
            return 100
        }
        if (this.turns > 0 && this.incorrectGuesses.length === this.turns) {
            return 0
        }
        return Math.round((1 - (this.incorrectGuesses.length / this.turns)) * 100)
    }
}

module.exports = Round