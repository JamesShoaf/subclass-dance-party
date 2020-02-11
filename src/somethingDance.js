var somethingDance = function(top, left, timeBetweenSteps) {
  this.$node = $(`<span class=" bounce dancer" id='${window.dancers.length}'></span>`);
  Dancer.call(this, top, left, timeBetweenSteps);
};

somethingDance.prototype = Object.create(Dancer.prototype);

somethingDance.constructor = somethingDance;

somethingDance.prototype.step = function() {
  var dancer = this;
  setTimeout(dancer.step.bind(dancer), dancer.timeBetweenSteps);
  this.$node.toggle('bounce');
};
