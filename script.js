 //declare variables
 let wins = 0;
 let losses = 0;
 let ties = 0;
 const choices = ["rock", "paper", "scissors"]

 function RandomRange(min = 0, max = 3) {
 	return Math.floor(Math.random() * (+max - +min)) + min
 }

 function getComputerSelection() {
 	return choices[RandomRange()];
 }

 function getPlayerSelection() {
 	let answer = window.prompt("Rock, Paper, or Scissors?");
 	return answer.toLowerCase();
 }

 function playRound(playerSelection = getPlayerSelection(), computerSelection = getComputerSelection()) {
 	if (playerSelection === "rock") {
 		if (computerSelection === "rock") {
 			ties++;
 			return "You tie: computer chose rock too.";
 		} else if (computerSelection === "paper") {
 			losses++;
 			return "You lose. Computer chose paper."
 		} else {
 			wins++;
 			return "You win. Computer chose scissors."
 		}
 	}
 	if (playerSelection === "paper") {
 		if (computerSelection === "paper") {
 			ties++;
 			return "You tie: computer chose paper too."
 		} else if (computerSelection == "scissors") {
 			losses++;
 			return "You lose. Computer chose scissors."
 		} else {
 			wins++;
 			return "You win. Computer chose rock."
 		}
 	}
 	if (playerSelection == "scissors") {
 		if (computerSelection === "scissors") {
 			ties++;
 			return "You tie: computer chose scissors too."
 		} else if (computerSelection === "rock") {
 			losses++;
 			return "You lose. Computer chose rock."
 		} else {
 			wins++;
 			return "You win. Computer chose scissors."
 		}
 	}
 }

 function determineWinner() {
 	if (wins > losses) {
 		return "Player wins match :)"
 	}
 	if (losses > wins) {
 		return "Computer wins match :("
 	}
 	if (wins === losses) {
 		return "You tie with the computer :|"
 	}
 }

 function playMatch() {
 	let i;
 	for (i = 0; i < 5; i++) {
 		console.log(playRound());
 	}
 	console.log(determineWinner());
 }

 function updateScore() {
 	document.getElementById("wins").textContent = wins;
 	document.getElementById("losses").textContent = losses;
 	document.getElementById("ties").textContent = ties;
 }
 const buttons = document.querySelectorAll('button');
 buttons.forEach((button => {
 	button.addEventListener('click', (e) => {
 		const playerSelection = e.target.firstChild.textContent;
 		document.getElementById("playerConsole").textContent = playRound(playerSelection.toLowerCase())
 		updateScore();
 		if ((wins + losses) >= 5){
 			document.getElementById("playerConsole").textContent = determineWinner();
 			wins = 0;
			losses = 0;
			ties = 0;
 			updateScore();
		}
 	})
 }))

 //console.log(playRound("rock"))