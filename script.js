let element = document.getElementById('count-el');
document.getElementById('increment_btn').addEventListener('click', getClicked);
document.getElementById('save_btn').addEventListener('click', save);
let savedP = document.getElementById("save_p");
document.getElementById('clean').addEventListener('click', toClearAll);



let count = 0;

function getClicked(){
count +=  1;
element.innerHTML = count;
console.log('clicked');
   }

function save(){
console.log(count);
let savedValues = " " + count + " "  + "-";
savedP.innerHTML += savedValues;
}

function toClearAll(){
   element.innerHTML = count = 0;
}



  



   





