describe('lineDance', function() {
  var dancers, blinkyDancer1, blinkyDancer2;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    dancers = window.dancers;
    blinkyDancer1 = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should check the height of a dancer', function() {
    expect(window.dancers[0]);
  });

});