//Tests for ship object
const Ship = require('./Ship');

test('ship object should have matching length, hits and sunk properties', () => {
  const obj = new Ship(3);
  expect(obj).toEqual(
    expect.objectContaining({
      len: 3,
      hits: [],
      sunk: false,
    })
  );
});


test('ship object can register hits and be sunk', () => {
  const obj = new Ship(2);
  obj.hit(0);
  obj.hit(1);
  obj.isSunk();
  expect(obj).toEqual(
    expect.objectContaining({
      hits: ["hit", "hit"],
      sunk: true,
    })
  );
})


//Tests for gameboard object
const Gameboard = require('./Gameboard');

test('gameboard object should have matching properties', () => {
  const obj = new Gameboard();
  expect(obj).toEqual(
    expect.objectContaining({
      carrier: expect.anything(),
      battleship: expect.anything(),
      cruiser: expect.anything(),
      submarine: expect.anything(),
      destroyer: expect.anything(),
      misses: expect.anything(),
    }),
  );
});


test('gameboard.board should have destroyer in A1 & A2 positions.', () => {
  const obj = new Gameboard();
  obj.generateBoard();
  obj.placeShip(0,0,false,"destroyer");
  const expected1 = ["", "destroyer", 0]
  const expected2 = ["", "destroyer", 1]
  expect(obj.board[0][0]).toEqual(expected1);
  expect(obj.board[0][1]).toEqual(expected2);
});

test('Gameboard can receive successful attacks', () => {
  const obj = new Gameboard();
  obj.generateBoard();
  obj.placeShip(4,0,true,"carrier");
  obj.receiveAttack(4,0);
  const hitsArray = ["hit"];
  expect(obj.carrier.hits).toEqual(hitsArray);
})

test('Gameboard object can register misses', () => {
  const obj = new Gameboard();
  obj.generateBoard();
  obj.placeShip(4,0,true,"carrier");
  obj.receiveAttack(0,0);
  const missArray = ['00'];
  const boardEntry = "miss";
  expect(obj.misses).toEqual(missArray);
  expect(obj.board[0][0][0]).toEqual(boardEntry);
})


//Tests for player object
// const Player = require('./Player');

// test('Player object can make random attacks', () => {
//   const obj = new Gameboard();
//   obj.generateBoard();
//   obj.placeShip(4,0,true,"carrier");
//   const player = new Player("computer");
//   player.guessAttack();
//   const expected = "miss";
//   expect(obj.board[0][0][0]).toBe(expected);
// })
