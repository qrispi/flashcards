const data = require('./data')
const prototypeQuestions = data.prototypeData
const util = require('./util')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

class Game {
	constructor() {
		this.currentRound
	}

	start(runTest) {
		let cards = []
		prototypeQuestions.forEach(obj => cards.push(new Card(obj["id"], obj["question"], obj["answers"], obj["correctAnswer"])))
		let deck = new Deck(cards)
		let round = new Round(deck)
		this.currentRound = round
		let msg = runTest || this.printMessage(deck)
		let question = runTest || this.printQuestion(round)
	}

	printMessage(deck) {
		console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
	}

	printQuestion(round) {
		util.main(round)
	}
}

module.exports = Game