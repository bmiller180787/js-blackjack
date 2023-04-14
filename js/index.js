let card1 = document.querySelector('.card1')
let card2 = document.querySelector('.card2')
let card3 = document.querySelector('.card3')
let card4 = document.querySelector('.card4')
let card5 = document.querySelector('.card5')
let card6 = document.querySelector('.card6')

card1.addEventListener("mouseover", mouseover)
card1.addEventListener("mouseout", mouseoff)
card1.addEventListener("click", enlarge)
card2.addEventListener("mouseover", mouseover)
card2.addEventListener("mouseout", mouseoff)
card2.addEventListener("click", enlarge)
card3.addEventListener("mouseover", mouseover)
card3.addEventListener("mouseout", mouseoff)
card3.addEventListener("click", enlarge)
card4.addEventListener("mouseover", mouseover)
card4.addEventListener("mouseout", mouseoff)
card4.addEventListener("click", enlarge)
card5.addEventListener("mouseover", mouseover)
card5.addEventListener("mouseout", mouseoff)
card5.addEventListener("click", enlarge)
card6.addEventListener("mouseover", mouseover)
card6.addEventListener("mouseout", mouseoff)
card6.addEventListener("click", enlarge)

function mouseover (){
    this.classList.add("movetofront")
}

function mouseoff (){
    this.classList.remove("movetofront")
}

function enlarge (){
    // this.setTimeout()
    this.classList.toggle("enlarge")
}

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
            fullDeck.push({card: name = `${face.name} of ${suite}` , value: face.value , order: }
            )
        })
})

//Attempt to do a manual shuffle
// function shuffleDeck (Deck) {
//
//     let reps = (Math.floor(Math.random() * (100 - 20) + 20))
//     let copyDeck = Deck
//
//     for (let i = 0; i < reps; i++) {
//         let randomCardIndex = (Math.floor(Math.random() * (51 - 1) + 1))
//         let x = copyDeck
//         console.log(copyDeck)
//         let y = x.splice(randomCardIndex)
//         copyDeck = y.concat(x)
//         console.log(x)
//         console.log(y)
//     }
//     return copyDeck
// }
console.log(fullDeck)

function dealCards (deck) {

}