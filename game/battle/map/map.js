function Map() {
  //map = game.world.cursor.map;
}

Map.prototype.getTileAtPos = function(pos) {
  var map = game.world.cursor.map;
  return map.getTile(pos.x, pos.y).properties;
}

Map.prototype.getPenaltyAtPos = function(pos, unit) {
  // This line is causing problems
  var tile = this.getTileAtPos(pos);
  if (unit instanceof UnitInfantry) {
    return parseInt(tile.movCostInf);
  } else if (unit instanceof UnitArtillery) {
    return parseInt(tile.movCostArt);
  } else if (unit instanceof UnitFlying) {
    return parseInt(tile.movCostFly);
  } else if (unit instanceof UnitCavalry) {
    return parseInt(tile.movCostCav);
  } else {
    return 1;
  }
}

Map.prototype.posValid = function(pos) {
  var map = game.world.cursor.map;
  return (pos.x >=0 && pos.x < map.width && pos.y >= 0 && pos.y < map.height);
}



