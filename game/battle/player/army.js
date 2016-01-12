function Army(units) {
	this.units = units
};

Army.prototype.update = function(map) {
  this.removeDeadUnits();
  this.units.forEach(function(unit) {
  	unit.updateUnit(map);
  });
};

Army.prototype.removeDeadUnits = function() {
  for (var i = this.units.length - 1; i >= 0; i--) {
    if(!this.units[i].alive) {
      this.units.splice(i, 1);
    }
  }
}
