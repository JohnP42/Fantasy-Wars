describe("Unit", function() {

  beforeEach(function() {
    // var position = new Position(1,1);
    // var unit = new Unit(location);
  });

  describe("move", function() {
    it("moves a unit from one location to target location", function() {
      var position = new Position(1,1);
      var position2 = new Position(1,0);
      var position3 = new Position(0,0);
      var unit = new Unit(position);
      unit.move([position2, position3]);
      // console.log(unit.position);
      expect(unit.position.getCoordinates()).toEqual([0,0]);
    });
  });
});
