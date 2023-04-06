let inputField = document.querySelector(".inputField")
const btn = document.querySelector(".btn")
btn.addEventListener("click", calculate)

const clearBtn = document.querySelector('.clear_btn')
clearBtn.addEventListener('click', function(){
    inputField.value = ''
    document.querySelector(
        ".met_feet"
      ).textContent = ' '
      document.querySelector(
        ".feet_met"
      ).textContent = ''
    
      document.querySelector(
        ".lit_gal"
      ).textContent = ''
      document.querySelector(
        ".gal_lit"
      ).textContent = ''
    
      document.querySelector(
        ".kilo_pounds"
      ).textContent = ''
      document.querySelector(
        ".pounds_kilo"
      ).textContent = ''

})

function calculate() {
  let input = inputField.value;
  let feetQuantity = (input * 3.281).toFixed(3)
  let metQuantity = (input / 3.281).toFixed(3)

  let litersQuantity = (input * 0.264).toFixed(3)
  let gallonsQuantity = (input / 0.264).toFixed(3)

  let kiloQuantity = (input * 2.204).toFixed(3)
  let poundQuantity = (input / 2.204).toFixed(3)

  document.querySelector(
    ".met_feet"
  ).textContent = `${input} m = ${feetQuantity} feet`
  document.querySelector(
    ".feet_met"
  ).textContent = `${input} feet = ${metQuantity} m`

  document.querySelector(
    ".lit_gal"
  ).textContent = `${input} liters = ${gallonsQuantity} gallons`
  document.querySelector(
    ".gal_lit"
  ).textContent = `${input} gallons = ${litersQuantity} liters`

  document.querySelector(
    ".kilo_pounds"
  ).textContent = `${input} kilo = ${poundQuantity} pound`
  document.querySelector(
    ".pounds_kilo"
  ).textContent = `${input} pound = ${kiloQuantity} kilo`
}
