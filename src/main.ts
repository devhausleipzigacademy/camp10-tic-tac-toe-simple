import "./style.css";

// make a grid-container div in your html

// grab the element from html - selector of some sort (certain type of query *wink wink*)

const gridContainer = document.getElementById("gridContainer");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

//initial symbol state

let currentPlayer = "x";

// function generate grid

function generateGrid() {
	for (let i = 1; i <= 3; i++) {
		const row = document.createElement("div");
		row.className = "row";

		for (let j = 1; j <= 3; j++) {
			const cell = document.createElement("div");
			cell.className = "cell";

			// find a way to generate and attach a grid id system for each cell
			cell.id = `${i}-${j}`;

			// instead of console.log on click append the "x" to the cell
			cell.onclick = function () {
				if (!cell.textContent) {
					cell.textContent = currentPlayer;
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
