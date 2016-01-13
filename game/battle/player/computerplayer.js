// Computer AI implemented using a Finite State Machine with embedded rules

ComputerPlayer.prototype = new Player();
ComputerPlayer.prototype.constructor = ComputerPlayer;

function ComputerPlayer(army, hqPos) {
  this.army = army;
  this.active = false;  // boolean to be used to determine which players turn it is
  this.hqPosition = hqPos;
  this.mode = null;
  this.battle = null;
};

ComputerPlayer.prototype.update = function(map, myTurn) {
  this.army.update(map);
};


// Computer Modes - Aggressive, Defensive, Patrol
ComputerPlayer.prototype.updateMode = function(mode) {
  switch(mode) {
    case "aggressive":
      this.mode = new AggressiveMode(this.battle);
      break;
    case "defensive":
      this.mode = new DefensiveMode(this.battle);
      break;
    case "patrol":
      this.mode = new PatrolMode(this.battle);
      break;
    default:
      this.mode = new DefaultMode(this.battle);
      break;
  }
};

ComputerPlayer.prototype.playTurn = function() {
  nextMode = this.mode.execute();
  this.updateMode(nextMode);
};

ComputerPlayer.prototype.handleComputerMove = function() {
  return this.mode.handleComputerMove();
}