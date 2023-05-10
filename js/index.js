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

let fullDeck = []
let player1Cards = []
let player2Cards = []
let player1Score = 0
let player2Score = 0

suites.forEach((suite) => {
    faces.forEach((face) => {
        fullDeck.push({card: name = `${face.name} of ${suite.name}`, value: face.value, colour: suite.colour}
        )
    })
})

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
    fullDeck = [...a]
}

function dealPlayer1Card() {
    player1Cards.push(fullDeck[0])
    fullDeck.shift()
    if (player1Cards.length > 2) {
        player1Score += player1Cards[player1Cards.length - 1].value
    }
}

function dealPlayer2Card() {
    player2Cards.push(fullDeck[0])
    fullDeck.shift()
    if (player2Cards.length > 2) {
        player2Score += player2Cards[player2Cards.length - 1].value
    }
}

function resetDeck() {
    for (let i = 0; i < player1Cards.length; i++) {
        fullDeck.push(player1Cards[i])
    }

    player1Cards = []

    for (let i = 0; i < player2Cards.length; i++) {
        fullDeck.push(player2Cards[i])
    }

    player2Cards = []

}

function dealCards() {
    dealPlayer1Card()
    dealPlayer2Card()
    dealPlayer1Card()
    dealPlayer2Card()
    calculatePlayer1Score()
    calculatePlayer2Score()
}

function calculatePlayer1Score() {
    player1Cards.forEach((card) => {
        player1Score += card.value
    })
}

function calculatePlayer2Score() {
    player2Cards.forEach((card) => {
        player2Score += card.value
    })
}

function clearHands() {
    player1Score = 0
    player2Score = 0
    resetDeck()
}
