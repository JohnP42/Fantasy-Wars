MenuButton.prototype = Object.create(Phaser.Button.prototype);
MenuButton.prototype.constructor = MenuButton;

function MenuButton(x, y, key, targetState) {
  this.key = key;
  this.targetState = targetState;
  game.add.button(x, y, key, this.actionOnClick, this);
};

MenuButton.prototype.actionOnClick = function() {
  game.state.start(this.targetState);
};
