// Abstract Class
function Mode(battle) {
  this.battle = battle;
};

Mode.prototype.execute = function() {
  console.log("You must implement this function to inherit from this");
};

Mode.prototype.determineNextAction = function() {
  console.log("You must implement this function to inherit from this");
}