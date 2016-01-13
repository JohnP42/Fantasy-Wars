function Player(army, hqPos) {
	this.army = army;
  this.gold = 500;
  this.active = false; // boolean to be used to determine which players turn it is
  this.hqPos = hqPos;
};

Player.prototype.update = function(map, myTurn) {
	this.army.update(map);
};

Player.prototype.unitPositions = function() {
  return this.army.units.map(function(unit) {
    return unit.pos;
  });
};

Player.prototype.onTurnStart = function(map, myPlayerID) {
  this.army.units.forEach(function(unit) {
    var tile = map.getTileAtPos(unit.pos);
    if(tile.owner !== undefined && tile.owner === myPlayerID) {
      var prevDamageTaken = unit.damageTaken;
      unit.damageTaken -= Math.floor(unit.health / 5);
      if(unit.damageTaken < 0) {
        unit.damageTaken = 0;
      }
      var healthGained = prevDamageTaken - unit.damageTaken ;

      if(healthGained > 0){
        var style = { font: "12px Arial", backgroundColor: "green", fill: "#ffffff", strokeThickness: 3, align: "center" };
        var text = game.add.text(unit.pos.canvasX() + 16, unit.pos.canvasY(), ("+" + healthGained), style);
        text.anchor.set(0.5);
        text.alpha = 1;
        var tween = game.add.tween(text).to( { alpha: 0, y: unit.pos.canvasY() - 20 }, 1500, "Linear", true);
      }
    }
  });
}

Player.prototype.openMenu = function() {
  //TODO: Opens menu and presents player options
};

Player.prototype.endTurn = function() {
  // Allows player to end their turn
  this.army.units.forEach(function(unit) {
    unit.resetUnit();
  });
};

Player.prototype.quitGame = function() {
  //TODO: Allows player to end the battle
  // When this function is called it will start the "VictoryState" Game State
};
