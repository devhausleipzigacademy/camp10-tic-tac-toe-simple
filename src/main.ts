import "./style.css";

// make a grid-container div in your html

// grab the element from html - selector of some sort (certain type of query *wink wink*)

const gridContainer = document.getElementById("gridContainer");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

//initial symbol state
let currentPlayer = "x";
let scores = { x: 0, o: 0 };

// boardgame state which at the start of the game is sort of like null

// [
//     [o, x, 0],
//     [x, o, x],
//     [x, o, x],
// ]

//initialize a gameboard matrix that tracks our x and o
// let gameBoard = [];

// for (let i = 0; i < 3; i++) {
// 	let row = [];
// 	for (let j = 0; j < 3; j++) {
// 		row.push(null);
// 	}
// 	gameBoard.push(row);
// }

let gameBoard: string[][] = Array(3)
	.fill(null)
	.map(() => Array(3).fill(null));

// winning conditions
const winningConditions = [
	[
		[0, 0],
		[0, 1],
		[0, 2],
	],
	[
		[1, 0],
		[1, 1],
		[1, 2],
	],
	[
		[2, 0],
		[2, 1],
		[2, 2],
	],
	[
		[0, 0],
		[1, 0],
		[2, 0],
	],
	[
		[0, 1],
		[1, 1],
		[2, 1],
	],
	[
		[0, 2],
		[1, 2],
		[2, 2],
	],
	[
		[0, 0],
		[1, 1],
		[2, 2],
	],
	[
		[2, 0],
		[1, 1],
		[0, 2],
	],
];

// function generate grid

function generateGrid() {
	for (let i = 0; i < 3; i++) {
		const row = document.createElement("div");
		row.className = "row";

		for (let j = 0; j < 3; j++) {
			const cell = document.createElement("div");
			cell.className = "cell";

			// find a way to generate and attach a grid id system for each cell
			cell.id = `${i}-${j}`;

			// instead of console.log on click append the "x" to the cell
			cell.onclick = function () {
				if (!cell.textContent) {
					cell.textContent = currentPlayer;

					// set the gameboard with the symbol of the current player
					gameBoard[i][j] = currentPlayer;

					console.log(cell.id, cell.textContent);
					currentPlayer = currentPlayer === "x" ? "o" : "x";
					player1?.classList.toggle("active");
					player2?.classList.toggle("active");
				}
			};

			row.appendChild(cell);
		}

		gridContainer?.appendChild(row);
	}
}

generateGrid();
