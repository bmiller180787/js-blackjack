const suites = [
    'Diamonds',
    'Hearts',
    'Spades',
    'Clubs'
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
    },    {
        name: '5',
        value: 5
    },    {
        name: '6',
        value: 6
    },    {
        name: '7',
        value: 7
    },    {
        name: '8',
        value: 8
    },    {
        name: '9',
        value: 9
    },    {
        name: '10',
        value: 10
    },    {
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
// let shuffledDeck = []
suites.forEach( (suite) => {
        faces.forEach((face) => {
            fullDeck.push({card: name = `${face.name} of ${suite}` , value: face.value}
            )
        })
})

// Attempt to do a manual shuffle
// function shuffleDeck (Deck) {
//
//     let reps = (Math.floor(Math.random() * (5 - 3) + 3))
//     for (let i = 0; i < reps; i++) {
//         let randomCardIndex = (Math.floor(Math.random() * (51 - 1) + 1))
//         let x =[]
//         x = Deck
//         let y = x.splice(randomCardIndex)
//         Deck = []
//         Deck = y.concat(x)
//         console.log(Deck)
        // console.log(x)
        // console.log(y)
//     }
//
// }
// console.log(shuffleDeck(fullDeck))

player1Cards = []
player2Cards = []

function dealPlayer1Card (deck)
{
    player1Cards.push(deck[0])
    fullDeck.shift()
}

function dealPlayer2Card (deck)
{
    player2Cards.push(deck[0])
    fullDeck.shift()
}

function resetDeck ()
{
    for (let i = 0; i < player1Cards.length; i++) {
        fullDeck.push(player1Cards[i])
    }

    player1Cards = []

    for (let i = 0; i < player2Cards.length; i++) {
        fullDeck.push(player2Cards[i])
    }

    player2Cards = []

}

function dealCards ()
{
    dealPlayer1Card(fullDeck)
    dealPlayer2Card(fullDeck)
    dealPlayer1Card(fullDeck)
    dealPlayer2Card(fullDeck)
}

console.log(player1Cards)
console.log(player2Cards)
console.log(fullDeck)

resetDeck()
console.log(fullDeck)
console.log(player1Cards)
console.log(player2Cards)