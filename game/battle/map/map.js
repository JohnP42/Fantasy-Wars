function Map() {
  //map = game.world.cursor.map;
}

Map.prototype.getTileAtPos = function(position) {
  var map = game.world.cursor.map;
  return map.getTile(position.x, position.y).properties;
}




