

const inputField = document.querySelector('.inputField')
const btn = document.querySelector('.btn')
btn.addEventListener('click', calculate)


function calculate(){

    let input = inputField.value
    let feetQuantity = (input*3.281).toFixed(3)
    let metQuantity = (input/3.281).toFixed(3)

    let litersQuantity = (input*0.264).toFixed(3)
    let gallonsQuantity = (input/0.264).toFixed(3)

    let kiloQuantity = (input*2.204).toFixed(3)
    let poundQuantity = (input/2.204).toFixed(3)


document.querySelector('.met_feet').textContent = `${input} m = ${feetQuantity} feet`
document.querySelector('.feet_met').textContent = `${input} feet = ${metQuantity} m`





}

