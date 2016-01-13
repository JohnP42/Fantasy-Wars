ArmyDwarf.prototype = new Army();
ArmyDwarf.prototype.constructor = ArmyDwarf;

function ArmyDwarf(units) {
    this.units = units;
    this.armyList = [
        Warrior,
        Grenadier,
        Mech,
        MotorBike,
        IronGuard,
        Mortar,
        Cannon,
        Biplane
    ];
};
