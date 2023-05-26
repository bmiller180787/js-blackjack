let deal = document.querySelector('.dealButton')
let hit = document.querySelector('.hitButton')
let stick = document.querySelector('.stickButton')
let newGame = document.querySelector('.newGameButton')
let player1Scoring = document.querySelector('.player1Score p')
let player2Scoring = document.querySelector('.player2Score p')
let modal = document.querySelector('.modal')
let modalText = document.querySelector('.modal p')
let player1CardArea = document.querySelector('.player1cards')
let player2CardArea = document.querySelector('.player2cards')
deal.addEventListener('click', () => {
    if (gameplayControllers.player1Cards.length === 0 && gameplayControllers.player2Cards.length === 0) {
        dealCards()
        deal.classList.add('hidden')
        hit.classList.remove('hidden')
        stick.classList.remove('hidden')
    }
})

hit.addEventListener('click', () => {
    if (gameplayControllers.player1Cards.length !== 0 || gameplayControllers.player2Cards.length !== 0) {
        if (gameplayControllers.player1Score <= 21) {
            if (!gameplayControllers.player1stick) {
                dealPlayer1Card()
                player1Scoring.textContent = 'Player 1 score : ' + gameplayControllers.player1Score
            } else if (gameplayControllers.player2Score <= 21) {
                if (!gameplayControllers.player2stick) {
                    dealPlayer2Card()
                    player2Scoring.textContent = 'Player 2 score : ' + gameplayControllers.player2Score
                }
            }
        }
    }
})

stick.addEventListener('click', () => {

    if (!gameplayControllers.player1stick) {
        gameplayControllers.player1stick = true
    } else if (!gameplayControllers.player2stick) {
        gameplayControllers.player2stick = true
        checkWinner()
        hit.classList.add('hidden')
        stick.classList.add('hidden')
    } else {
        checkWinner()
        hit.classList.add('hidden')
        stick.classList.add('hidden')
    }
})

newGame.addEventListener('click', () => {
    clearHands()
    deal.classList.remove('hidden')
    modal.classList.add('modalhidden')
    modalText.textContent = ''
    newGame.classList.add('hidden')
    hit.classList.add('hidden')
    stick.classList.add('hidden')
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
shuffleDeck(gameplayControllers.fullDeck)

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

function checkWinner() {
    if (gameplayControllers.player1Score === gameplayControllers.player2Score) {
        modal.classList.remove('modalhidden')
        modalText.textContent = `It's a draw!`
        newGame.classList.remove('hidden')
    } else if (gameplayControllers.player1Score > gameplayControllers.player2Score) {
        modal.classList.remove('modalhidden')
        modalText.textContent = 'Player 1 wins!'
        newGame.classList.remove('hidden')
    } else {
        modal.classList.remove('modalhidden')
        modalText.textContent = 'Player 2 wins!'
        newGame.classList.remove('hidden')
    }
}

function dealPlayer1Card() {
    gameplayControllers.player1Cards.push(gameplayControllers.fullDeck[0])
    gameplayControllers.fullDeck.shift()
    generatePlayer1Card()

    if (gameplayControllers.player1Cards.length > 2) {
        gameplayControllers.player1Score += gameplayControllers.player1Cards[gameplayControllers.player1Cards.length - 1].value
    }

    player1Scoring.textContent = 'Player 1 score : ' + gameplayControllers.player1Score

    if (gameplayControllers.player1Score > 21) {
        modal.classList.remove('modalhidden')
        modalText.textContent = 'Player 1 went bust - Player 2 wins!'
        newGame.classList.remove('hidden')
        hit.classList.add('hidden')
        stick.classList.add('hidden')
    }
}

function dealPlayer2Card() {
    gameplayControllers.player2Cards.push(gameplayControllers.fullDeck[0])
    gameplayControllers.fullDeck.shift()
    generatePlayer2Card()

    if (gameplayControllers.player2Cards.length > 2) {
        gameplayControllers.player2Score += gameplayControllers.player2Cards[gameplayControllers.player2Cards.length - 1].value
    }

    player2Scoring.textContent = 'Player 2 score : ' + gameplayControllers.player2Score

    if (gameplayControllers.player2Score > 21) {
        modal.classList.remove('modalhidden')
        modalText.textContent = 'Player 2 went bust - Player 1 wins!'
        newGame.classList.remove('hidden')
        hit.classList.add('hidden')
        stick.classList.add('hidden')
    }
}

function resetCards() {
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
    gameplayControllers.player1stick = false
    gameplayControllers.player2stick = false
    resetCards()

    player1Scoring.textContent = 'Player 1 score : ' + gameplayControllers.player1Score
    player2Scoring.textContent = 'Player 2 score : ' + gameplayControllers.player2Score

    player1CardArea.innerHTML = ""
    player2CardArea.innerHTML = ""
}

function generatePlayer1Card() {
    if (!gameplayControllers.player1stick) {
        let i = gameplayControllers.player1Cards.length - 1

        player1CardArea.innerHTML = '<div class="card"><img src="images/' + gameplayControllers.player1Cards[i].name +
            '.png" alt="The ' + gameplayControllers.player1Cards[i].name +
            '"> </div>'
    }
}

function generatePlayer2Card() {
    if (!gameplayControllers.player2stick) {
        let i = gameplayControllers.player2Cards.length - 1

        player2CardArea.innerHTML = '<div class="card"><img src="images/' + gameplayControllers.player2Cards[i].name +
            '.png" alt="The ' + gameplayControllers.player2Cards[i].name +
            '"> </div>'
    }
}
