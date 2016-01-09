ArmyDwarf.prototype = new Army();
ArmyDwarf.prototype.constructor = ArmyDwarf;

function ArmyDwarf(units) {
	this.units = units
};