var BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.id = `${parseInt(top)}${parseInt(timeBetweenSteps)}`;
  this.$node = $(`<span class="blinky dancer" id=${this.id}></span>`);
  Dancer.call(this, top, left, timeBetweenSteps);// var idNumber = 'blinky';
  //id='${idNumber}'



  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.step();
  //this.oldStep = this.step;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.constructor = BlinkyDancer;
BlinkyDancer.prototype.oldStep = this.step;

BlinkyDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.$node.toggle();
};