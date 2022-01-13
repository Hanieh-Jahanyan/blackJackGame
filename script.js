let cards =[]
let sum =0
let hasBlackJack=false
let isAlive=false
let message =""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.querySelector("#card-el")


function getRandomCard(){
    let pastour= Math.floor(Math.random()*13) +1
    if(pastour >10){
        return 10
    }else if(pastour ===1){
        return 11
    }else{
        return pastour
    }
}


function startGame(){
    isAlive=true
    let firstCard =getRandomCard()
    let secondCard=getRandomCard()
    cards =[firstCard +secondCard]
    sum = firstCard+secondCard
    renderGame()
}


function renderGame(){
if(sum<=20){
    message ="Do you want to draw a new card?😀"

}else if(sum===21){
    message ="Wohooo! you've got Blackjack🤩😎"
    hasBlackJack = true
}else{
    message ="you are out of game!😭"
    isAlive=false
}
messageEl.textContent=message
sumEl.textContent="Sum: "+sum
cardEl.textContent="Cards: "
for(let i=0;i<cards.length;i++){
    cardEl.textContent+=cards[i]+" "
}
 }


function newCard(){
if(isAlive===true && hasBlackJack ===false){
    let card =getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
}  

}


