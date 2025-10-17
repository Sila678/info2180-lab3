//use strict;

window.onload = function(){

	//References to the main elements of the game.
	const game = document.getElementById("game");
	const status = document.getElementById("status");
	const board = document.getElementById("board");
	const controls = document.getElementsByClassName("controls")[0]; //Personal Note - returns more than one element.
	const button = document.getElementsByClassName("btn")[0];
	
	//To get all squares in the board.
	const sqrs = board.querySelectorAll("div");

	//Adding the class "square to each box"
	for (var i = 0; i < sqrs.length; i++){
		sqrs[i].setAttribute("class", "square");
	}

	//Game play
	//Tracks the current player
	let curtPlayer = "X";

	//Keeps track of game state
	let gameState = Array(9).fill(null);
	let gameActive = true; //Stops game play if someone wins

	for (let i=0; i< sqrs.length; i++){
		sqrs[i].addEventListener("click", function(){
			if(!gameActive || gameState[i] !== null) return; //No further moves can be made
			sqrs[i].textContent = curtPlayer;
			sqrs[i].classList.add(curtPlayer); //for appropriate colour from stylesheet
			gameState[i] = curtPlayer;

			//Ceck for winner
			if(winnerCheck()){
				status.textContent = `Congratulations! ${curtPlayer} is the Winner!`;
				status.classList.add("you-won");
				gameActive = false;
			} else{
				//Switch turn
				curtPlayer = curtPlayer === "X" ? "O" : "X";
			}
		});

		//Changing style when mouse is moved over a square
		sqrs[i].addEventListener("mouseover", function(){
			sqrs[i].classList.add("hover");
		});

		sqrs[i].addEventListener("mouseout", function(){
			sqrs[i].classList.remove("hover");
		});
	}

	//Check for a winner
	function winnerCheck(){
		const win_Patterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for(let pattern of win_Patterns){
			const [a, b, c] = pattern;
			if(gameState[a] && gameState[a] == gameState[b] && gameState[a] == gameState[c]){
				return true;
			}
		}
		return false;
	}

	//Reset the game
	button.addEventListener("click", function(){
		//Clear each square
		for(let i=0; i < sqrs.length; i++){
			sqrs[i].textContent = "";
			sqrs[i].classList.remove("X", "O");
		}

		//Reset game variables
		gameState = Array(9).fill(null);
		curtPlayer = "X";
		gameActive = true;

		// Reset status message
		status.textContent = "Move your mouse over a square and click to play an X or an O.";
		status.classList.remove("you-won");
	});
};
