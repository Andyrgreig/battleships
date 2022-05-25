
import Gameboard from "./Gameboard";
import Player from "./Player";

function init () {

    const player1 = new Player("Bob");
    const player2 = new Player("Computer");

    const player1Board = new Gameboard()
    const player2Board = new Gameboard()

    player1Board.generateBoard();
    player2Board.generateBoard();

    player1Board.placeShip(0, 0, false, "carrier");
    player1Board.placeShip(6, 3, true, "battleship");
    player1Board.placeShip(4, 6, false, "cruiser");
    player1Board.placeShip(2, 2, true, "submarine");
    player1Board.placeShip(8, 7, false, "destroyer");


    player2Board.placeShip(4, 8, true, "carrier");
    player2Board.placeShip(1, 4, true, "battleship");
    player2Board.placeShip(6, 3, false, "cruiser");
    player2Board.placeShip(8, 3, false, "submarine");
    player2Board.placeShip(1, 7, false, "destroyer");

}

export default init;
