window.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("gridContainer");
  const resultDisplay = document.getElementById("resultDisplay");
  const gameScore = document.getElementById("gameScore");
  const flagScore = document.getElementById("flagScore");
  const resetButton = document.getElementById("resetButton");

  const totalCells = 81;
  const totalBombs = 10;
  let bombs = [];
  let clickedCells = [];
  let points = 0;
  let flags = 0;

  function generateRandomBombs() {
    bombs = [];
    while (bombs.length < totalBombs) {
      const random = Math.floor(Math.random() * totalCells) + 1;
      if (!bombs.includes(random)) {
        bombs.push(random);
      }
    }
  }

  function createGrid() {
    gridContainer.innerHTML = "";
    for (let i = 1; i <= totalCells; i++) {
      const cell = document.createElement("div");
      cell.id = `cell_${i}`;
      cell.classList.add("cell");
      cell.addEventListener("click", handleCellClick);
      gridContainer.appendChild(cell);
    }
  }

  function handleCellClick() {
    const cellId = this.id;
    const cellNumber = parseInt(cellId.split("_")[1]);
    if (bombs.includes(cellNumber)) {
      this.classList.add("clicked-bomb");
      showAllBombs();
      gameOver();
    } else {
      this.classList.add("clicked-cell");
      clickedCells.push(cellNumber);
      points++;
      gameScore.textContent = points;
      if (points === totalCells - totalBombs) {
        gameOver(true);
      }
    }
  }

  function showAllBombs() {
    bombs.forEach((bomb) => {
      const bombCell = document.getElementById(`cell_${bomb}`);
      bombCell.classList.add("bomb-cell");
    });
  }

  function gameOver(win = false) {
    gridContainer.removeEventListener("click", handleCellClick);
    if (win) {
      resultDisplay.textContent = "You Win!";
    } else {
      resultDisplay.textContent = "Game Over";
    }
  }

  function resetGame() {
    bombs = [];
    clickedCells = [];
    points = 0;
    flags = 0;
    resultDisplay.textContent = "";
    gameScore.textContent = "0";
    flagScore.textContent = "FLAGS = 0";
    createGrid();
    generateRandomBombs();
  }

  resetButton.addEventListener("click", resetGame);

  // Initialize the game
  resetGame();
});

// document.querySelectorAll("p:not(.p1)")

const divs = Array.from(document.querySelectorAll("div"));

let arr = divs.map((div) => !div.classList.contains("classname"));

console.log(arr)
