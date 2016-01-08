function Position(x, y) {
  this.x = x;
  this.y = y;
}

Position.prototype.getCoordinates = function() {
  return [this.x, this.y];
}

Position.prototype.canvasX = function() {
  return this.x * TILESCALE;
}

Position.prototype.canvasY = function() {
  return this.y * TILESCALE;
}
