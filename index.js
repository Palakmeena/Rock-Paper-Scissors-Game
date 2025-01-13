let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame( userChoice);
    });
});

const compChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const rand = Math.floor(Math.random() * 3);
    return choices[rand];
};

const playgame = (userChoice) => {
    
    console.log("User choice:", userChoice);
    const comp = compChoice(); // Get computer's choice
    console.log("Computer choice:", comp);

    if(comp==userChoice){
        console.log("It's a tie!")
        document.querySelector("#btn").innerText="Round is Tie!🤝 "
        document.querySelector("#btn").style.backgroundColor = "yellow";
    }

    else if((comp=="rock" && userChoice=="scissor") || (comp=="scissor" && userChoice=="paper") || (comp=="paper" && userChoice=="rock")){
        console.log("Computer is Winner!")
        compScore++;
        document.querySelector("#comp-score").innerText=compScore
        document.querySelector("#btn").innerText="Computer Wins!🤖"
        document.querySelector("#btn").style.backgroundColor="red"


    }
    else{

        console.log("user is Winner!")
        userScore++;
        document.querySelector("#user-score").innerText=userScore
 document.querySelector("#btn").innerText="You Wins!🎉"
 document.querySelector("#btn").style.backgroundColor="green"
    

};}

// let user_score=document.querySelector("#user-score").innerText=
// let comp_score=document.querySelector("#play-button").innerText=






