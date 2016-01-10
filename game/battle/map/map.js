function Map() {
  //map = game.world.cursor.map;
}

Map.prototype.getTileAtPos = function(pos) {
  var map = game.world.cursor.map;
  return map.getTile(pos.x, pos.y).properties;
}

Map.prototype.getPenaltyAtPos = function(pos, unit) {
  var tile = this.getTileAtPos(pos);
  return 1;
}



