ArmyOrc.prototype = new Army();
ArmyOrc.prototype.constructor = ArmyOrc;

function ArmyOrc(units) {
	this.units = units
};