describe('somethingDance', function() {

  var somethingDance, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    somethingDance = new SomethingDance(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(somethingDance.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(somethingDance.$node, 'toggle');
    somethingDance.step();
    expect(somethingDance.$node.toggle.called).to.be.true;
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(somethingDance, 'step');
      expect(somethingDance.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(somethingDance.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(somethingDance.step.callCount).to.be.equal(2);
    });


  });

});
