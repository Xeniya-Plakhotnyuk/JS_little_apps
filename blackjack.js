
let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard

let btn = document.querySelector('.btn_start')
btn.addEventListener('click', startGame)
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards')
let drawCard = document.querySelector(".btn_card")
drawCard.addEventListener('ckick',newCard)


let messageEl = document.getElementById('message-el')
let hasBlackJack = false
let isAlive = true

let message = ' '


function startGame(){
    cardsEl.textContent = 'Cards: ' + firstCard + " / " + secondCard
    sumEl.textContent = 'Sum: ' + sum
if (sum <= 20){
   message = "Do you want to draw a new card?"
} else if(sum === 21){
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else{
    message = "You're out of the game!"
    let isAlive = false
}
messageEl.textContent = message

}

function newCard(){

}


