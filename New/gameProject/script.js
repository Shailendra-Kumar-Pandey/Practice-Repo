let userScore = 0;
let compScore = 0;

let userpScore= document.querySelector("#user-score");
let comppScore = document.querySelector("#comp-score");


const imageS = document.querySelectorAll(".image");

const msg = document.querySelector("#msg");


const ganCompChoice = ()=>{
    const option=["rock","paper","scissors"];
     const randIdx = Math.floor(Math.random()*3);
     return option[randIdx];


}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userpScore.innerText = userScore;
        console.log("You win! play again");
        msg.innerText="You win ! play again";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        comppScore.innerText=compScore;
        console.log("You Loss! play again");
        msg.innerText="You Loss! play again";
        msg.style.backgroundColor="red";
        

    }
}

const drawGame = ()=>{
    console.log("game is draw");
    msg.innerText="Game is Draw! play again";
    msg.style.backgroundColor="blue";
    



}

const playGame =(userChoice) =>{
    console.log("choise was click", userChoice);
    //ganrate computer choice
    const comChoice = ganCompChoice();
    console.log("choise computer was click", comChoice);
    if(userChoice === comChoice){
            drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = comChoice === "paper" ? false:true;
        }else if(userChoice==="paper"){
            userWin = comChoice === "scissors" ? false:true;
        }else{
            userWin = comChoice === "rock" ? false : true;
        }
            showWinner(userWin);
    }
};

imageS.forEach((image) => {
    image.addEventListener("click",()=>{
        const userChoice = image.getAttribute("id");
    playGame(userChoice);
    });   
});

