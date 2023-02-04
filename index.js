const selection = ['Rock','Paper','Scissors'];
const playerSelection = function () {
    return prompt()
};

const computerSelection = function () {
    let random = Math.floor(Math.random()* selection.length) 
    return selection[random]
};

let player = (playerSelection())
let computer = (computerSelection())
alert(cs)

if (ps.toLowerCase() === cs.toLowerCase()) {
     alert("You tie!") 
    } else if ((ps.toLowerCase() === "rock" && cs.toLowerCase() === "paper") || (ps.toLowerCase() === "paper" && cs.toLowerCase() === "scissors") || (ps.toLowerCase() === "scissors" && cs.toLowerCase() == "rock"))
    {
    alert("You Lose!")  
    } else {
    alert("You win!")    
    }

const game = function (playerSelection,computerSelection){

}
