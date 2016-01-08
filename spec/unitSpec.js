describe("Unit", function() {

  beforeEach(function() {
    var location = new Location(1,1)
    var unit = new Unit(location)
  });

  describe("move", function() {
    it("moves a unit from one location to target location", function() {
      Unit.move([[1,0], [0,0]];
      expect(unit.location.coordinates).toBe([0,0]));
    });
  });
});
