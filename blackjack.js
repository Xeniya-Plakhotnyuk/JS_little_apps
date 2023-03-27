let cards = []
let sum = 0
let isAlive = false
let message = ' '



let btn = document.querySelector('.btn_start')
btn.addEventListener('click', startGame)
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards')
let drawCard = document.querySelector(".btn_card")
drawCard.addEventListener('click', newCard)


let messageEl = document.getElementById('message-el')
let hasBlackJack = false


function getRandomCard(){
let randomNumber =  Math.floor(Math.random() * 13 + 1)
if ( randomNumber > 10){
    return 10
} else if (randomNumber === 1){
    return 11
} else {
    return randomNumber
}

}

function startGame(){
isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard,secondCard]
sum = firstCard + secondCard

  renderGame()  
}

function renderGame(){
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
     cardsEl.textContent += cards[i] + ' ' 
    }

    
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
    let card = getRandomCard()
    sum += card
    cards.push(card)

    renderGame() 

}


