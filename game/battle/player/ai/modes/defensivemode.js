Defensive.prototype = new Mode();
Defensive.prototype.constructor = Defensive;

function Defensive() {

};

Defensive.prototype.execute = function() {
  console.log("Implementing execute function");
};