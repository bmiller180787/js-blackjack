let deal = document.querySelector('.dealButton')
let hit = document.querySelector('.hitButton')
let stick = document.querySelector('.stickButton')
let newGame = document.querySelector('.newGameButton')
let player1Scoring = document.querySelector('.player1Score p')
let player2Scoring = document.querySelector('.player2Score p')

deal.addEventListener('click', () => {
    dealCards()
})

hit.addEventListener('click', () => {

    if (gameplayControllers.player1stick === false) {
        dealPlayer1Card()
        player1Scoring.textContent = 'Player 1 score : ' + gameplayControllers.player1Score
    } else {
        dealPlayer2Card()
        player2Scoring.textContent = 'Player 2 score : ' + gameplayControllers.player2Score
    }

})

stick.addEventListener('click', () => {

    if (gameplayControllers.player1stick === false) {
        gameplayControllers.player1stick = true
    } else {
        gameplayControllers.player2stick = true
    }
})

newGame.addEventListener('click', () => {
    clearHands()
})

const suites = [
    {
        name: 'Diamonds',
        colour: 'red'
    },
    {
        name: 'Hearts',
        colour: 'red'
    },
    {
        name: 'Clubs',
        colour: 'black'
    },
    {
        name: 'Spades',
        colour: 'black'
    },
]

const faces = [
    {
        name: '2',
        value: 2
    },
    {
        name: '3',
        value: 3
    },
    {
        name: '4',
        value: 4
    }, {
        name: '5',
        value: 5
    }, {
        name: '6',
        value: 6
    }, {
        name: '7',
        value: 7
    }, {
        name: '8',
        value: 8
    }, {
        name: '9',
        value: 9
    }, {
        name: '10',
        value: 10
    }, {
        name: 'Jack',
        value: 10
    },
    {
        name: 'Queen',
        value: 10
    },
    {
        name: 'King',
        value: 10
    },
    {
        name: 'Ace',
        value: 11
    },
]

const gameplayControllers = {
    fullDeck: [],
    player1Cards: [],
    player1stick: false,
    player2Cards: [],
    player2stick: false,
    player1Score: 0,
    player2Score: 0
}

suites.forEach((suite) => {
    faces.forEach((face) => {
        let card = {
            name: `${face.name} of ${suite.name}`,
            value: face.value,
            colour: suite.colour
        }
        gameplayControllers.fullDeck.push(card)
    })
})
shuffleDeck()

function shuffleDeck(array) {

    let a = [...array]
    let reps = (Math.floor(Math.random() * (200 - 150) + 150))
    for (let i = 0; i < reps; i++) {
        let firstCut = (Math.floor(Math.random() * ((array.length - 1) - 1) + 1))
        let secondCut = (Math.floor(Math.random() * (((array.length - 1) - firstCut) - 1) + 1))

        let b = a.splice(firstCut)
        let c = b.splice(secondCut)
        let y = c.concat(b, a)

        a = []
        a = [...y]
    }
    gameplayControllers.fullDeck = [...a]
}

function dealPlayer1Card() {
    gameplayControllers.player1Cards.push(gameplayControllers.fullDeck[0])
    gameplayControllers.fullDeck.shift()

    if (gameplayControllers.player1Cards.length > 2) {
        gameplayControllers.player1Score += gameplayControllers.player1Cards[gameplayControllers.player1Cards.length - 1].value
    }

    player1Scoring.textContent = 'Player 1 score : ' + gameplayControllers.player1Score
}

function dealPlayer2Card() {
    gameplayControllers.player2Cards.push(gameplayControllers.fullDeck[0])
    gameplayControllers.fullDeck.shift()
    if (gameplayControllers.player2Cards.length > 2) {
        gameplayControllers.player2Score += gameplayControllers.player2Cards[gameplayControllers.player2Cards.length - 1].value
    }

    player2Scoring.textContent = 'Player 2 score : ' + gameplayControllers.player2Score
}

function resetHands() {
    for (let i = 0; i < gameplayControllers.player1Cards.length; i++) {
        gameplayControllers.fullDeck.push(gameplayControllers.player1Cards[i])
    }

    gameplayControllers.player1Cards = []

    for (let i = 0; i < gameplayControllers.player2Cards.length; i++) {
        gameplayControllers.fullDeck.push(gameplayControllers.player2Cards[i])
    }

    gameplayControllers.player2Cards = []

}

function dealCards() {
    dealPlayer1Card()
    dealPlayer2Card()
    dealPlayer1Card()
    dealPlayer2Card()
    calculatePlayer1Score()
    calculatePlayer2Score()

    player1Scoring.textContent = 'Player 1 score : ' + gameplayControllers.player1Score
    player2Scoring.textContent = 'Player 2 score : ' + gameplayControllers.player2Score
}

function calculatePlayer1Score() {
    gameplayControllers.player1Cards.forEach((card) => {
        gameplayControllers.player1Score += card.value
    })
}

function calculatePlayer2Score() {
    gameplayControllers.player2Cards.forEach((card) => {
        gameplayControllers.player2Score += card.value
    })
}

function clearHands() {
    gameplayControllers.player1Score = 0
    gameplayControllers.player2Score = 0
    resetHands()
    gameplayControllers.player1stick = false
    gameplayControllers.player2stick = false

    player1Scoring.textContent = 'Player 1 score : ' + gameplayControllers.player1Score
    player2Scoring.textContent = 'Player 2 score : ' + gameplayControllers.player2Score
}

function generatePlayer1Hand () {

}
