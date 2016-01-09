function Map() {
  //map = game.world.cursor.map;
}

Map.prototype.getTileAtPos = function(position) {
  var tiles = game.world.cursor.map.layers[0].data;
  return tiles[position.x][position.y].properties;
}




