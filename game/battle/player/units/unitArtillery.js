UnitArtillery.prototype = new Unit();
UnitArtillery.prototype.constructor = UnitArtillery;

function UnitArtillery(position) {
  this.position = position;
}
