const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', () => {
    let game

    beforeEach(() => {
        game = new Game()
        game.start('null')
    })

    it('should be a function', () =>
        expect(Game).to.be.a('function')
    )

    it('should be an instance of Game', () =>
        expect(game).to.be.an.instanceOf(Game)
    )
    
    it('should use an instance of Round to store the round', () =>
        expect(game.currentRound).to.be.an.instanceOf(Round)
    )
    
    it('should use an instance of Deck to store the cards', () =>
        expect(game.currentRound.currentDeck).to.be.an.instanceOf(Deck)
    )

    it('should use an instance of Card to create cards', () =>
        expect(game.currentRound.currentDeck.cards[0]).to.be.an.instanceOf(Card)
    )
        
    it('should store the cards in order', () => {
        expect(game.currentRound.currentDeck.cards[0].id).to.equal(1)
        expect(game.currentRound.currentDeck.cards[1].id).to.equal(2)
        expect(game.currentRound.currentDeck.cards[2].id).to.equal(3)

        expect(game.currentRound.currentDeck.cards[24].id).to.equal(25)
    })

    it('should have a method to print a start message', () =>
        expect(game.printMessage).to.be.a('function')
    )

    it('should have a method to print each question', () =>
        expect(game.printQuestion).to.be.a('function')
    )
})