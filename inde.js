let player1="X";
let player2="0";
let turn=true;
let boxes=document.getElementsByClassName("box");
const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let gameOver=false;
let change=document.getElementById("para");
for (let i = 0; i < boxes.length; i++) {
boxes[i].addEventListener("click", function(){
if (!boxes[i].innerHTML && !gameOver) {
    boxes[i].innerHTML=turn ? player1:player2;
    winlogic(); 
    if (gameOver) return; 

    checkDraw(); 
    turn = !turn;
}
})
}
function winlogic(){
for (let j = 0; j < arr.length; j++) {
    const [a,b,c]=arr[j];
    if (boxes[a].innerHTML&&
        boxes[a].innerHTML===boxes[b].innerHTML &&
        boxes[a].innerHTML=== boxes[c].innerHTML
    ) {
        change.textContent=turn ? "X wins" : "O wins";
        gameOver=true;
        return;
    }
    
}

}
function checkDraw(){
let isFull=true;
for (let index = 0; index < boxes.length; index++) {
if (boxes[index].innerHTML==="") {
    isFull=false;
    break;
}    
}

if (isFull) {
    change.textContent="Draw";
    gameOver=true;
}    
}

function reset() {
    for (let index = 0; index < boxes.length;index++){
        boxes[index].innerHTML="";
    }
    gameOver=false;
    turn=true;
    change.textContent="";
}
document.getElementById("reset").addEventListener("click",reset);

