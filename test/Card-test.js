const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')

describe('Card', () => {
	let card

	beforeEach(() => 
		card = new Card(13, 'Who is the best Superhero?', ['Spider-Man', 'Batman', 'Superman'], 'Batman')
	)

	it('should be a function', () =>
		expect(Card).to.be.a('function')
	)

	it('should be an instance of Card', () =>
		expect(card).to.be.an.instanceof(Card)
	)

	it('should store an id', () =>
		expect(card.id).to.equal(13)
	)

	it('should store a question', () =>
		expect(card.question).to.equal('Who is the best Superhero?')
	)

	it('should store a list of possible answers', () =>
		expect(card.answers).to.deep.equal(['Spider-Man', 'Batman', 'Superman'])
	)

	it('should store the correct answer', () =>
		expect(card.correctAnswer).to.equal('Batman')
	)
})