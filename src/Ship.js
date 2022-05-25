function Ship (len) {
     
  this.len = len,
  this.hits =  [],
  this.sunk = false,
 
  this.hit = function(num) {
    if (num < this.len) {
      this.hits[num] = "hit";
    }
  },
  
  this.isSunk = function() {
    if (this.hits.every((element) => element === 'hit') && this.hits.length === this.len) {
      this.sunk = true;
    }
  }
}

module.exports = Ship;
