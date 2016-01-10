describe("Unit", function() {
  var unit;
  var pos;

  beforeEach(function() {
    pos = new Pos(1,1);
    unit = new Unit(location);
  });

  describe("move", function() {
    it("Moves a unit from one location to target location", function() {
      unit.move([new Pos(1,0),  new Pos(0,0)]);
      expect(unit.pos.getCoordinates()).toEqual([0,0]);
    });
  });

  describe("attack", function() {
    xit("Allows you to attack an enemy unit", function() {

    });
  });

  describe("getPossibleMoves", function() {
    xit("Returns an array of all possible moves", function() {

    });
  });

  describe("getSurroundingTiles", function() {
    xit("Returns an array of all surrounding tiles of a given location", function() {

    });
  });

  describe("getPossibleMoves", function() {
    xit("Returns all possible moves from a given location", function() {

    });
  });

  describe("getPossibleAttacks", function() {
    xit("Returns all possible attacks from a given location", function() {

    });
  });

  describe("animate", function() {
    xit("Updates animation state appropriately", function() {

    });
  });

  describe('takeDamage', function() {
    it("Able to take damage from an attack", function() {
      unit.takeDamage(50);
      expect(unit.health).toEqual(50)
    });
    xit("Die is called if unit takes fatal damage", function() {
      // TODO
    });
  });

  describe("getHealthNumber", function() {
    it("Translates health percentage into a displayable number 1-10", function() {
      expect(unit.getHealthNumber()).toEqual(jasmine.any(Number));
    });
    it("Returns 6 when 54 is entered", function() {
      unit.takeDamage(46);
      expect(unit.getHealthNumber()).toEqual(6);
    });
    it("Returns 10 when 98 is entered", function() {
      unit.takeDamage(2);
      expect(unit.getHealthNumber()).toEqual(10);
    });
  });

  describe("getAttackDamage", function() {
    xit("It returns attack damage on a given position", function() {

    });
  });

  describe("die", function() {
    xit("Unit is destroyed", function() {

    });
  });
});
