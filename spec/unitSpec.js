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

  describe('takeDamage', function() {
    it("Able to take damage from an attack", function() {
      unit.takeDamage(50);
      expect(unit.health).toEqual(50)
    });
    xit("Unit is destroyed if it takes fatal damage", function() {
      // TODO
    });
  });
});
