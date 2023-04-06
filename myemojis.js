

const myEmojis = ["👨‍💻", "⛷", "🍲"]


const btn = document.getElementById('push-btn')

btn.addEventListener('click', function(){
let emojiInput = document.getElementById('emoji-input')
if(emojiInput.value){
myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    console.log(myEmojis)}
    
})

   


let emojiCont = document.getElementById('emojiContainer')
console.log(emojiCont)

for( let i =0; i< myEmojis.length; i++){
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiCont.append(emoji)
}

