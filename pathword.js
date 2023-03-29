const btn = document.querySelector('.btn_generate')
btn.addEventListener('click', generateRandomPassword)

function generateRandomPassword(){


const characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let passwordLength = 15
let password1 = ' '
let password2 = ' '

for(let i=0; i < passwordLength; i++){
    
let randomChar = Math.floor(Math.random() * characters.length)

password1 += characters.substring(randomChar, randomChar + 1)


password2 += characters.substring(randomChar, randomChar + 1)

    }

document.getElementById('pas1').textContent = password1
document.getElementById('pas2').textContent = password2

} 





