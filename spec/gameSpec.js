describe('Game', function(){

  var game;

  describe('setup', function(){

    it('Game should contain ten frames', function(){
      game = new Game;
    });

    it('Each frame should contain two rolls', function(){

    });

    it('Each roll should have a point value', function(){
      roll = new Roll();
      expect(roll.point_value).NottoEqual(null)
    });


  });








});