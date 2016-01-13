function Map() {
  //map = game.world.cursor.map;
}

Map.prototype.getTileAtPos = function(pos) {
  var map = game.world.cursor.map;
  var tile = map.getTile(pos.x, pos.y)
  return tile ? tile.properties : tile;
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

Map.prototype.getAllBuildings = function() {
  var buildings = [];

  var map = game.world.cursor.map;

  for(var x = 0; x < map.width; x++) {
    for(var y = 0; y < map.height; y++) {
      var tile = map.getTile(x, y);
      if(tile.properties.owner !== undefined) {
        buildings.push(tile.properties);
      }
    }
  }
  return buildings
}

Map.prototype.getAllBuildingsForPlayer = function(player) {
  var buildings = [];
  this.getAllBuildings().forEach(function(building) {
    if(parseInt(building.owner) === player)
      buildings.push(building);
  });

  return buildings;
}



