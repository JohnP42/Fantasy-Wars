function Army(units) {
	this.units = units
};

Army.prototype.update = function(map) {
  this.units.forEach(function(unit) {
  	console.log(unit);
  	unit.updateUnit(map);
  });
};