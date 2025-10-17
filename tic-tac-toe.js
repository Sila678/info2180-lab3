use strict;

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
	};


}
