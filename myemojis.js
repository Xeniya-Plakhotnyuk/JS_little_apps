

const myEmojis = ["👨‍💻", "⛷", "🍲"]
let emojiInput = document.getElementById('emoji-input')
const btn = document.getElementById('push-btn')
const unshBtn = document.getElementById('unshift-btn')
const shiftBtn = document.getElementById('shift-btn')
const popBtn = document.getElementById('pop-btn')
let emojiCont = document.getElementById('emojiContainer')


function renderEmojis(){
emojiCont.innerHTML = ''

for( let i =0; i< myEmojis.length; i++){
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiCont.append(emoji)
}
}

renderEmojis()

btn.addEventListener('click', function(){

if(emojiInput.value){
myEmojis.push(emojiInput.value)
    emojiInput.value = ""
        renderEmojis()

}
   
})

unshBtn.addEventListener('click', function(){
   
    if(emojiInput.value){
    myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})


shiftBtn.addEventListener('click', function(){
   
        myEmojis.shift()
        renderEmojis()
    
}) 

popBtn.addEventListener('click', function(){
   
        myEmojis.pop()
        renderEmojis()
    
}) 


