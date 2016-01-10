function Pos(x, y, parentPos) {
  this.x = x;
  this.y = y;
  this.parentPos = parentPos || null;
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

Pos.prototype.getPath = function() {
	if (this.parentPos === null) 
		return [this];
	return [this].concat(this.parentPos.getPath());
}