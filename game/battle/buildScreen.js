function BuildScreen(armyList, player, battle) {
  this.armyList = armyList;
  this.battle = battle;
  this.onCreate();
}

BuildScreen.prototype.onCreate = function() {
  this.armyList.forEach(function(unitClass, index) {
    unit = new unitClass(new Pos(8, 3 + index), this.battle.currentPlayer);
    unit.animations.play("stand", 5, true);
  });
  var begin = game.add.graphics.drawRect()
  game.add.tween(backdrop).to( {x: 300, y: 300})

}
