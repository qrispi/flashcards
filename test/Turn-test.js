const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', () => {
    let card
    let turn

    beforeEach(() => {
        card = new Card(13, 'Who is the best Superhero?', ['Spider-Man', 'Batman', 'Superman'], 'Batman')
        turn = new Turn('Spider-Man', card)
    })

    it('should be a function', () =>
        expect(Turn).to.be.a('function')
    )

    it('should be an instance of Turn', () => 
        expect(turn).to.be.a.instanceOf(Turn)  
    )

    it('should store the player\'s guess', () => 
        expect(turn.guess).to.equal('Spider-Man')
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
        expect(check).to.be.a('boolean')
    })

    it('should respond if the player guesses wrong', () => {
        let feedback = turn.giveFeedback()
        expect(feedback).to.equal('incorrect!')
    })

    it('should respond if the player guesses right', () => {
        turn.guess = 'Batman'
        let feedback = turn.giveFeedback()
        expect(feedback).to.equal('correct!')
    })
})