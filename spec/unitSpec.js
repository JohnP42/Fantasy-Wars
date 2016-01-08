describe("Unit", function() {

  beforeEach(function() {
    var position = new Position(1,1);
    // var unit = new Unit(location);
  });

  describe("move", function() {
    it("moves a unit from one location to target location", function() {
      var unit = new Unit(position);
      // unit.move([[1,0], [0,0]]);
      console.log(unit.position)
      expect(unit.position.coordinates).toEqual([0,0]);
    });
  });
});
