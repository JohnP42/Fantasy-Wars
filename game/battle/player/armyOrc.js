ArmyOrc.prototype = new Army();
ArmyOrc.prototype.constructor = ArmyOrc;

function ArmyOrc(units) {
  this.units = units;
  this.armyList = [
    Warmonger,
    Impaler,
    Berserker,
    Salamander,
    GilaMonster,
    Catapult,
    BloodWing,
    Wyvern
  ];
};
