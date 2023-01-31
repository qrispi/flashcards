const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', () => {
    let card
    let turn

    beforeEach(() => {
        card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        turn = new Turn('pug', card)
    })

    it('should be a function', () =>
        expect(Turn).to.be.a('function')
    )

    it('should be an instance of Turn', () => 
        expect(turn).to.be.a.instanceOf(Turn)  
    )

    it('should store the player\'s guess', () => 
        expect(turn.guess).to.equal('pug')
    )

    it('should store the current card in play', () => 
        expect(turn.card).to.deep.equal(card)
    )

    it('should return the player\'s guess', () => {
        let guess = turn.returnGuess()
        expect(turn.guess).to.equal(guess)
    })

    it('should return the current card in play', () => {
        let currentCard = turn.returnCard()
        expect(turn.card).to.equal(currentCard)
    })

    it('should check if the player\'s guess is correct', () => {
        let check = turn.evaluateGuess()
        expect(check).to.be.boolean
    })

    it('should respond if the player guesses wrong', () => {
        let feedback = turn.giveFeedback()
        expect(feedback).to.equal('incorrect!')
    })

    it('should respond if the player guesses right', () => {
        let feedback = turn.giveFeedback()
        expect(feedback).to.equal('correct!')
    })
})