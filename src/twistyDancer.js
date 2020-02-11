var TwistyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $(`<span class="twisty dancer" id='${window.dancers.length}'></span>`);
  Dancer.call(this, top, left, timeBetweenSteps);
};

TwistyDancer.prototype = Object.create(Dancer.prototype);

TwistyDancer.constructor = TwistyDancer;

TwistyDancer.prototype.step = function() {
  var dancer = this;
  setTimeout(dancer.step.bind(dancer), dancer.timeBetweenSteps);
  this.$node.toggleClass('twisty', 1000, 'dancer').animate('shake');
};
