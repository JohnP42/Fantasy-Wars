UnitArtillery.prototype = new Unit();
UnitArtillery.prototype.constructor = UnitArtillery;

function UnitArtillery(pos, player) {
  this.pos = pos;
}
