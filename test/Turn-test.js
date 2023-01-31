const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {
    let card
    let turn

    beforeEach(function () {
        card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        turn = new Turn('pug', card)
        // console.log(card)
        // console.log(turn)
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
})