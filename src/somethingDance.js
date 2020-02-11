var SomethingDance = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class=" bounce dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

SomethingDance.prototype = Object.create(Dancer.prototype);

SomethingDance.constructor = SomethingDance;

SomethingDance.prototype.step = function() {
  var dancer = this;
  setTimeout(dancer.step.bind(dancer), dancer.timeBetweenSteps);
  this.$node.toggle('bounce');
};
