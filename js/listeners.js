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
