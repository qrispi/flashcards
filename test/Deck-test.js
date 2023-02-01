const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', () => {
    let card1
    let card2
    let card3
    let deck

    beforeEach(() => {
        card1 = new Card(13, 'Who is the best Superhero?', ['Spider-Man', 'Batman', 'Superman'], 'Batman')
        card2 = new Card(27, 'Who is the best Supervillain?', ['Joker', 'Thanos', 'Darth Vader'], 'Joker')
        card3 = new Card(007, 'Who is the best Spy?', ['James Bond', 'Black Widow', 'Jason Bourne'], 'Black Widow')
        deck = new Deck([card1, card2, card3])
    })

    it('should be a function', () =>
        expect(Deck).to.be.a('function')
    )

    it('should be an instance of Deck', () => 
        expect(deck).to.be.a.instanceOf(Deck)  
    )
})