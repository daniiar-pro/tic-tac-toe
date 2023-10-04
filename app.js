// Factory function to store  game board Array
function GameBoard() {
  const gameboard = ["X", "O", "X", "O", "X", "X", "X", "O", "O"];
  return {
    gameboard,
  };
}

// Since Gameboard is object, is return gameboard object of array, we're converting object to array then getting
// inner array since , it's converted as two dimensional array
const board = GameBoard();
const outerBoardArr = Object.values(board);
// here only one dimensional array
const boardArr = outerBoardArr[0];

// Factory function to create Players
function Players() {
  const getName = (name) => {
    return name;
  };
  const getSymbol = (symbol) => {
    return symbol;
  };
  return {
    getName,
    getSymbol,
  };
}

// Player X
const playerX = Players();
playerX.getName("firstPlayer");
playerX.getSymbol("X");

// Player O
const playerO = Players();
playerO.getName("secondPlayer");
playerO.getSymbol("O");

// Module functions (game logic)
const playGame = () => {
  const gameBoard = boardArr;
  // restart module to restart game, return gameBoard (new board to play)
  const restart = () => gameBoard;

  return {
    restart,
  };
};

playGame();


 // Module to Display elements on the UI
const gamePanel = document.querySelector(".game-panel");

const displayOnUI = () => {
  const showCells = () => {
    const listItems = boardArr.map((cell) => {
      const item = document.createElement("button");
      item.textContent = cell;
      return item;
    });

    listItems.forEach((item) => {
      gamePanel.appendChild(item);
    });
  };
  showCells();
  return { showCells };
};

displayOnUI();
