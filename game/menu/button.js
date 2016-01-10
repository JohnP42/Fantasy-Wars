MenuButton.prototype = Object.create(Phaser.Button.prototype);
MenuButton.prototype.constructor = MenuButton;

function MenuButton(x, y, key) {
  game.add.button(x, y, key, this.actionOnClick);
};

MenuButton.prototype.actionOnClick = function() {
  game.state.start("battleState");
}
