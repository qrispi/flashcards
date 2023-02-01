const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Round = require('../src/Round')

describe('Round', () => {
    let card1
    let card2
    let card3
    let deck
    let turn
    let round
    
    beforeEach(() => {
        card1 = new Card(13, 'Who is the best Superhero?', ['Spider-Man', 'Batman', 'Superman'], 'Batman')
        card2 = new Card(27, 'Who is the best Supervillain?', ['Joker', 'Thanos', 'Darth Vader'], 'Joker')
        card3 = new Card(007, 'Who is the best Spy?', ['James Bond', 'Black Widow', 'Jason Bourne'], 'Black Widow')
        deck = new Deck([card1, card2, card3])
        turn = new Turn('Spider-Man', card1)
        round = new Round(deck)
    })

    it('should be a function', () => 
        expect(Round).to.be.a('function')
    )

    it('should be an instance of Round', () =>
        expect(round).to.be.an.instanceOf(Round)
    )

    it('should store the current deck', () =>
        expect(round.currentDeck).to.deep.equal(deck)
    )

    it('should start with the first card in the deck', () =>
        expect(round.currentCard).to.deep.equal(card1)
    )
    
    it('should start with no turns taken', () => 
        expect(round.turns).to.equal(0)
    )

    it('should start with no incorrect guesses', () => 
        expect(round.incorrectGuesses).to.deep.equal([])
    )

    it('should return the current card', () => {
        let currentCard = round.returnCurrentCard()
        expect(currentCard).to.deep.equal(card1)
    })

    it('should respond if a guess is correct each turn', () => {
        let correctGuess = round.takeTurn('Batman')
        expect(correctGuess).to.equal('correct!')
    })

    it('should respond if a guess is incorrect each turn', () => {
        let incorrectGuess = round.takeTurn('Spider-Man')
        expect(incorrectGuess).to.equal('incorrect!')
    })

    it('should update the turn count after every guess', () => {
        round.takeTurn('Joker')
        expect(round.turns).to.equal(1)

        round.takeTurn('Batman')
        round.takeTurn('Black Widow')
        expect(round.turns).to.equal(3)
    })
})