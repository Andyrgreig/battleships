
function Player (name) {
    
  this.name = name,
  this.guessAttack = function(target) {
      
    var row = 0;
    var col = 0;
    
    do {
      row = Math.floor(Math.random() * target.boardSize) ;
      col = Math.floor(Math.random() * target.boardSize) ;
    }
    while (target.board[row][col][0] !== "")

    target.receiveAttack(row,col);
  }
}
 
module.exports = Player;
  

