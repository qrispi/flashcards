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
}

module.exports = Round