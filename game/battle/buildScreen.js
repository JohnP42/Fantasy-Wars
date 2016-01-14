function BuildScreen(armyList, battle, createPos) {
  this.armyList = armyList;
  this.battle = battle;
  this.createPos = createPos;
  this.buttons = [];
  this.backdrop = null;
  this.text1 = [];
  this.text2 = null;
  this.onCreate();
}

BuildScreen.prototype.onCreate = function() {
  var that = this;
  this.backdrop = game.add.image(4 * TILESCALE, 2 * TILESCALE, 'unitBuildScreen');
  this.backdrop.width = 320;
  this.backdrop.height = 320;
  this.backdrop.alpha = 0;
  game.add.tween(this.backdrop).to( {scaleX: 320, scaleY: 320, alpha: 1, x: 4 * TILESCALE, y: 2 * TILESCALE - 16}, 500, "Linear", true);
  // this.backdrop.anchor.set(0.5);
  this.armyList.forEach(function(unitClass, index) {
    unit = new unitClass(new Pos(5, 3 + index), this.battle.currentPlayer);
    var color =  this.battle.getCurrentPlayer().gold >= unit.cost ? "white" : "red";
    that.text1.push(game.add.text(6 * TILESCALE + 8, unit.pos.canvasY() + 8, unit.name + "....GOLD: " + unit.cost, {font: "14px Arial", fill: color }));
    unit.animations.play("stand", 5, true);
    that.buttons.push(unit);
  });
  this.text2 = game.add.text(5 * TILESCALE, 2 * TILESCALE, "Click unit to build:", {font: "16px Arial", fill: "white", align: "left"});
}

BuildScreen.prototype.onClick = function(mousePos) {
  unitIndex = null;
  this.buttons.forEach(function(button, index) {
    if (button.pos.equals(mousePos) && button.cost <= this.battle.getCurrentPlayer().gold) {
      unitIndex = index;
    }
  });

  if(unitIndex === null) {
    return null;
  }
  else {
    var unit = new this.armyList[unitIndex](this.createPos, this.battle.currentPlayer)
    this.battle.getCurrentPlayer().gold -= unit.cost;
    return unit;
  }

}

BuildScreen.prototype.destroy = function() {
  var that = this;
  this.backdrop.destroy();
  this.text2.destroy();
  this.text1.forEach(function(text, index) {
    that.buttons[index].destroy();
    text.destroy();
  });
  return null;
}
