AggressiveMode.prototype = new Mode();
AggressiveMode.prototype.constructor = AggressiveMode;

function AggressiveMode() {

};

AggressiveMode.prototype.execute = function() {
  console.log("Implementing execute function");
};