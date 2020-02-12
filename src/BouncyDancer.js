var BouncyDancer = function(top, left, timeBetweenSteps) {
  this.id = `${parseInt(top)}${parseInt(timeBetweenSteps)}`;
  this.$node = $(`<span class="bounce dancer" id=${this.id}></span>`);
  Dancer.call(this, top, left, timeBetweenSteps);

};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.constructor = BouncyDancer;
BouncyDancer.prototype.oldStep = this.step;

BouncyDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.$node.slideToggle();
};
