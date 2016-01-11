MenuButton.prototype = Object.create(Phaser.Button.prototype);
MenuButton.prototype.constructor = MenuButton;

function MenuButton(x, y, key, targetState, audio) {
  this.key = key;
  this.targetState = targetState;
  this.audio = audio || null;
  game.add.button(x, y, key, this.actionOnClick, this);
};

MenuButton.prototype.actionOnClick = function() {
  if(this.audio !== null) {
    var sound = game.add.audio(this.audio);
    sound.play();
  };
  game.state.start(this.targetState);
};
