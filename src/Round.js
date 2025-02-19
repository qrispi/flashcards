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
        if (!currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(currentTurn.card.id)
        }
        this.currentCard = this.currentDeck.cards[this.turns]
        return currentTurn.giveFeedback()
    }

    calculatePercentCorrect() {
        if (this.turns < 1) {
            return 0
        }
        return Math.round((1 - (this.incorrectGuesses.length / this.turns)) * 100)
    }

    endRound() {
        return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round