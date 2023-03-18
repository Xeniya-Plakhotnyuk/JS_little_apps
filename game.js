// create 2 variables count1, count2

let score1 = document.getElementById('score1')


let score2 = document.getElementById('score2')


let count1 = 0
let count2 = 0


// add listener to buttons for team #1, call functions, render score

let btn_add1 = document.querySelector(".add1_team1")
btn_add1.addEventListener('click', add1Point)

let btn_add2 = document.querySelector('.add2_team1')
btn_add2.addEventListener('click', add2Points)

let btn_add3 = document.querySelector('.add3_team1')
btn_add3.addEventListener('click', add3Points)

// add listener to buttons for team #2, call functions, render score

let btn_add1_team2 = document.querySelector(".add1_team2")
btn_add1_team2.addEventListener('click', add1Point_t2)

let btn_add2_team2 = document.querySelector('.add2_team2')
btn_add2_team2.addEventListener('click', add2Points_t2)

let btn_add3_team2 = document.querySelector('.add3_team2')
btn_add3_team2.addEventListener('click', add3Points_t2)

// declare 3 functions for adding score to team #1

function add1Point() {
  count1 += 1;
  score1.innerHTML = count1;
}

function add2Points() {
  count1 += 2;
  score1.innerHTML = count1;
}

function add3Points() {
  count1 += 3;
  score1.innerHTML = count1;
}   
    
// declare 3 functions for adding score to team #2

function add1Point_t2() {
    count2 += 1;
    score2.innerHTML = count2;
  }
  
  function add2Points_t2() {
    count2 += 2;
    score2.innerHTML = count2;
  }
  
  function add3Points_t2() {
    count2 += 3;
    score2.innerHTML = count2;
  }   
      

// add listener to clear button

document.querySelector('.clear').addEventListener('click', toClear)

function toClear(){
    score1.innerHTML = count1 = 0;
    score2.innerHTML = count2 = 0;
}