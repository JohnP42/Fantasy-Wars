function Pos(x, y) {
  this.x = x;
  this.y = y;
}

Pos.prototype.getCoordinates = function() {
  return [this.x, this.y];
}

Pos.prototype.canvasX = function() {
  return this.x * TILESCALE;
}

Pos.prototype.canvasY = function() {
  return this.y * TILESCALE;
}

Pos.prototype.equals = function(pos) {
  return (this.x === pos.x && this.y === pos.y);
}