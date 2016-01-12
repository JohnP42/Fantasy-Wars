PatrolMode.prototype = new Mode();
PatrolMode.prototype.constructor = PatrolMode;

function PatrolMode() {

};

PatrolMode.prototype.execute = function() {
  console.log("Implementing execute function");
};