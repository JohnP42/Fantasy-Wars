describe("Unit", function() {
  var unit;
  var position;

  beforeEach(function() {
    position = new Position(1,1);
    unit = new Unit(location);
  });

  describe("move", function() {
    it("Moves a unit from one location to target location", function() {
      unit.move([new Position(1,0),  new Position(0,0)]);
      expect(unit.position.getCoordinates()).toEqual([0,0]);
    });
  });

  describe("attack", function() {
    xit("Allows you to attack an enemy unit", function() {

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
    xit("Translates health percentage into a displayable number 1-10", function() {

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
