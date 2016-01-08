function Location(x, y) {
  this.x = x;
  this.y = y;
}

Location.prototype.getCoordinates = function() {
  return [this.x, this.y];
}

Location.prototype.canvasX = function() {
  return this.x * TILESCALE;
}

Location.prototype.canvasY = function() {
  return this.y * TILESCALE;
}
