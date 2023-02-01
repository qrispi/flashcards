class Round {
    constructor(newDeck) {
        this.currentDeck = newDeck
        this.currentCard = newDeck.cards[0]
    }
}

module.exports = Round