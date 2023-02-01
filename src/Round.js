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
}

module.exports = Round