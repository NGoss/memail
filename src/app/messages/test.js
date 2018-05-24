const sentences = [
	'Tbrand terrorists driving the initiative forward low-hanging fruit.',
	'Wiggle room idea shower, for social currency we\'re ahead of the curve on that one.',
	'But what\'s the real problem we\'re trying to solve here?',
	'Good optics not enough bandwidth guerrilla marketing, so message the initiative yet future-proof, but collaboration through advanced technlogy.',
	'It just needs more cowbell take five, punch the tree, and come back in here with a clear head punter.',
	'We need distributors to evangelize the new line to local markets we need to start advertising on social media but what\'s the status on the deliverables for eow?',
	'You better eat a reality sandwich before you walk back in that boardroom, data-point.',
	'Vertical integration circle back UI dog and pony show.',
	'This vendor is incompetent punter yet we need to dialog around your choice of work attire.',
	'Pull in ten extra bodies to help roll the tortoise take five, punch the tree, and come back in here with a clear head, nor level the playing field accountable talk so wiggle room.',
	'Draft policy ppml proposal.',
	'Low-hanging fruit.',
	'Design thinking.',
	'Win-win.',
	'We just need to put these last issues to bed digitalize.',
	'Closer to the metal forcing function , meeting assassin.',
	'Quick-win so optimize for search going forward move the needle staff engagement marketing computer development html roi feedback team website.',
	'That ipo will be a game-changer please advise soonest and we need to start advertising on social media cross sabers.',
	'Obviously enough to wash your face.',
	'We need to leverage our synergies sacred cow, highlights .',
	'Bob called an all-hands this afternoon.',
	'Table the discussion i also believe it\'s important for every member to be involved and invested in our company and this is one way to do so.',
	'Message the initiative gain traction but gain traction, so run it up the flagpole drill down, yet we need a recap by eod, cob or whatever comes first.',
	'Ladder up / ladder back to the strategy idea shower the last person we talked to said this would be ready nor dog and pony show.',
	'Collaboration through advanced technlogy bench mark, for run it up the flagpole, ping the boss and circle back.',
	'We need to socialize the comms with the wider stakeholder community deliverables.',
	'Drop-dead date Q1, for deploy, but UI, and t-shaped individual idea shower.',
	'Blue money game-plan on this journey but quick win translating our vision of having a market leading platfrom but bench mark, nor can we align on lunch orders.',
	'Put in in a deck for our standup today strategic staircase red flag, nor three-martini lunch, yet drill down thought shower.',
	'Streamline ramp up waste of resources.',
	'Run it up the flag pole.'
]

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

export const paragraph = (numSentences) => {
	const randomSentences = shuffle(sentences)
	return randomSentences.slice(1, 1 + numSentences).reduce((acc, val) => acc + ' ' + val)
}
