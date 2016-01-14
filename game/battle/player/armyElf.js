ArmyElf.prototype = new Army();
ArmyElf.prototype.constructor = ArmyElf;

function ArmyElf(units) {
  this.units = units;
  this.armyList = [
    Longbow,
    Elite,
    Arcanist,
    Ranger,
    SilverLancer,
    Valkyrie,
    Ballista,
    EagleWatch
  ];
};
