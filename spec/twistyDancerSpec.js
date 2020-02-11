describe('twistyDance', function() {

  var twistyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    twistyDancer = new TwistyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(twistyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(twistyDancer.$node, 'toggleClass');
    twistyDancer.step();
    expect(twistyDancer.$node.toggleClass.called).to.be.true;
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(twistyDancer, 'step');
      expect(twistyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(twistyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(twistyDancer.step.callCount).to.be.equal(2);
    });


  });

});
