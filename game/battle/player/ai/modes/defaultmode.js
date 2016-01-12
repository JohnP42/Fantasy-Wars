DefaultMode.prototype = new Mode();
DefaultMode.prototype.constructor = DefaultMode;

function DefaultMode() {

};

DefaultMode.prototype.execute = function() {
  console.log("Implementing execute function");
};