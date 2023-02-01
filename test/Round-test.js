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
        round = new Round()
    })

    it('should be a function', () => 
        expect(Round).to.be.a('function')
    )

    it('should be an instance of Round', () =>
        expect(round).to.be.an.instanceOf(Round)
    )
})