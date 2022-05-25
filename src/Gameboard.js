import Ship from "./Ship";

function Gameboard() {
  this.boardSize = 10;
  this.board = [],
  this.carrier = new Ship(5),
  this.battleship = new Ship(4),
  this.cruiser = new Ship(3),
  this.submarine = new Ship(3),
  this.destroyer = new Ship(2),
  this.misses = [],
  
  this.placeShip = function (row, col, isVertical, shipType) {
    let count = 0;
    
    if (isVertical) {
      for (let i = row; i < row + this[shipType].len; i++) {
        this.board[i][col].push(`${shipType}`);
        this.board[i][col].push(count);
        count++;
      }
    } else {
      for (let i = col; i < col + this[shipType].len; i++) {
        this.board[row][i].push(`${shipType}`);
        this.board[row][i].push(count) 
        count++;
      }
    }
  },
  
  this.isSunk = function () {
    if (this.hits.every((element) => element === 'hit')) {
      this.sunk = true;
    }
  },

  this.generateBoard = function () {
    let arrayRow = []  
    for (let x = 0; x < this.boardSize; x++) {
      for (let y=0; y < this.boardSize; y++) {
        arrayRow.push([""]);
      }
      this.board.push(arrayRow);
      arrayRow = [];
    }
  },

  this.receiveAttack = function (row, col) {
    const cell = this.board[row][col]
    if (cell[1] !== undefined) {
      const ship = cell[1];
      const tile = cell[2];
      cell[0] = "hit";
      this.carrier.hit(tile);
    } else {
        this.misses.push(`${row}${col}`)
        cell[0] = "miss";
    }
  }
}

export default Gameboard;



