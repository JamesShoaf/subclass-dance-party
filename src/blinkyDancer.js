var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var idNumber = 'blinky';
  //id='${idNumber}'
  this.$node = $('<span class="blinky dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.step();
  //this.oldStep = this.step;


};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  var dancer = this;
  setTimeout(dancer.step.bind(dancer), dancer.timeBetweenSteps);
  this.$node.toggle();
};