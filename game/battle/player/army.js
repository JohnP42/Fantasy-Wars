function Army(units) {
	this.units = units
};

Army.prototype.update = function(map) {
  this.units.forEach(function(unit) {
  	unit.updateUnit(map);
  });
};
