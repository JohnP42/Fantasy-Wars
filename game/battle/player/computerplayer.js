// Computer AI implemented using a Finite State Machine with embedded rules

ComputerPlayer.prototype = new Player();
ComputerPlayer.prototype.constructor = ComputerPlayer;

function ComputerPlayer(army) {
  this.army = army;
  this.active = false;  // boolean to be used to determine which players turn it is
  this.mode = null;
};

// Computer Modes - Aggressive, Defensive, Patrol
ComputerPlayer.prototype.updateMode = function(mode) {
  switch(state) {
    case: "aggressive":
      this.mode = new AggressiveMode();
      break;
    case: "defensive":
      this.mode = new DefensiveMode();
      break;
    case: "patrol":
      this.mode = new PatrolMode():
      break;
    default:
      this.mode = new DefaultMode();
      break;
  }
};

ComputerPlayer.prototype.playTurn = function() {
  nextMode = this.mode.execute();
  this.updateMode(nextMode);
};