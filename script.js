let boxes= document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newButton= document.querySelector(".new-button");
let winnermsg = document.querySelector(".winner-box");

let turn0= true;
const winPatterns =[ [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8] ];
let counter=0;
boxes.forEach((box) => {
    box.addEventListener("click" , ()=> {
        if (turn0){
            box.innerText= "O";
            turn0=false;
            box.style.backgroundColor="#59C3C3";
            box.style.color=" #2B7878";
        }
        else{
            box.innerText = "X";
            turn0=true;
            box.style.backgroundColor="#F78D95";
            box.style.color=" #F45B69";
        }
        box.disabled = true;
        counter++;
        let win=checkWinner();

        if(counter===9 && win!= true){
            showDraw();
        }
    });
});



const resetgame=() =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    counter = 0 ;
};

const enableBoxes=() =>{
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="#EBEBEB";
    }
}

const showWinner =(winner) => {
    winnermsg.innerText=` Congratulations  Winner Is ${winner}!!`;
    for(let box of boxes) {
        box.disabled=true;
    }
    msgContainer.classList.remove("hide");
}

const showDraw =() => {
    winnermsg.innerText=` This Game Is A Draw !`;
    for(let box of boxes) {
        box.disabled=true;
    }
    msgContainer.classList.remove("hide");
}

const checkWinner =() => {
    for (let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if ( pos1 === pos2 && pos2===pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
};

newButton.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
