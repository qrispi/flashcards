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
        card2 = new Card(14, 'Who is the best Supervillain?', ['Joker', 'Thanos', 'Darth Vader'], 'Joker')
        card3 = new Card(15, 'Who is the best Spy?', ['James Bond', 'Black Widow', 'Jason Bourne'], 'Black Widow')
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

    it('should update the current card after every guess', () => {
        round.takeTurn('Joker')

        expect(round.currentCard).to.deep.equal(card2)

        round.takeTurn('Batman')

        expect(round.currentCard).to.deep.equal(card3)
    })

    it('should only store the id of cards the player guesses wrong', () => {
        round.takeTurn('Superman')

        expect(round.incorrectGuesses).to.deep.equal([13])

        round.takeTurn('Joker')
        round.takeTurn('James Bond')

        expect(round.incorrectGuesses).to.deep.equal([13, 15])    
    })

    it('should calculate the percentage of cards the player guessed correctly', () => {
        round.takeTurn('Batman')
        round.takeTurn('Joker')
        round.takeTurn('James Bond')

        let percent = round.calculatePercentCorrect()

        expect(percent).to.equal(67)
    })

    it('should return 100 if the player guessed all cards correctly', () => {
        round.takeTurn('Batman')
        round.takeTurn('Joker')
        round.takeTurn('Black Widow')

        let percent = round.calculatePercentCorrect()

        expect(percent).to.equal(100)
    })

    it('should return 0 if the player guessed all cards incorrectly', () => {
        round.takeTurn('Spider-Man')
        round.takeTurn('Darth Vader')
        round.takeTurn('Jason Bourne')

        let percent = round.calculatePercentCorrect()

        expect(percent).to.equal(0)
    })

    it('should return 0 if the player has not guessed yet', () => {
        let percent = round.calculatePercentCorrect()

        expect(percent).to.equal(0)
    })

    it('should be able to end the round with an informative message', () => {
        round.takeTurn('Batman')
        round.takeTurn('Joker')
        round.takeTurn('James Bond')
        
        let message = round.endRound()
        let percent = round.calculatePercentCorrect()

        expect(message).to.equal(`**Round over!** You answered ${percent}% of the questions correctly!`)
    })
})