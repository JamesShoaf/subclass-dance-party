var InteractDancer = function(top, left, timeBetweenSteps) { //${timeBetweenSteps}
  this.id = `${parseInt(top)}${parseInt(timeBetweenSteps)}`;
  this.$node = $(`<span id=${this.id} class ="interactive dancer"></span>`);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.id = `${parseInt(top)}${parseInt(timeBetweenSteps)}`;
};

InteractDancer.prototype = Object.create(Dancer.prototype);

InteractDancer.constructor = InteractDancer;

InteractDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // this.$node.toggle('bounce');
};

InteractDancer.prototype.findOtherInteractDancer = function() {
  //iterate through dancers to find if any other dancers have an id not equal to this.timeBetweenSteps
  //calculate a trajectory to start stepping through toward that dancer
};

InteractDancer.prototype.findNearestDancer = function() {
  var nearest = Number.POSITIVE_INFINITY;
  var index;
  for (let i = 0; i < window.dancers.length; i++) {
    var distance = this.distanceFromDancer(i);
    if (distance < nearest && distance > 0) {
      nearest = distance;
      index = i;
    }
  }
};

InteractDancer.prototype.findFurthestDancer = function() {
  //iterate through dancers to find the furthest dancer
  //calculate a trajectory to start stepping through toward that dancer
  var furthest = 0;
  var index;
  for (let i = 0; i < window.dancers.length; i++) {
    var distance = this.distanceFromDancer(i);
    if (distance > furthest) {
      furthest = distance;
      index = i;
    }
  }
  return index;
};

InteractDancer.prototype.distanceFromDancer = function(index) {
  //given an index from window.dancer
  //find the distance between this dancer (using this.timeBetweenSteps ID)
  //and the other dancer
  var interactiveTop = parseFloat(`$(#${Math.round(this.timeBetweenSteps)})`.css('top'));
  var interactiveLeft = parseFloat(`$(#${Math.round(this.timeBetweenSteps)})`.css('left'));
  var otherTop = window.dancers[index].$node[0].offsetTop; //style.cssText.split(';
  // $(this node).css('top', newTop value)
  // ')[1].split(':')[1].split('px')[0]);
  var otherLeft = window.dancers[index].$node[0].offsetLeft; //.style.cssText.split('; ')[2].split(':')[1].split('px')[0]);
  distance = Math.sqrt(
    Math.pow((otherTop - interactiveTop), 2) + Math.pow((otherLeft - interactiveLeft), 2)
  );
  return distance;
};

//top value for node i: window.dancers[i].$node[0].style.cssText.split('; ')[1].split(':')[1].split('px')[0]
//left value for node i: top value for node i: window.dancers[i].$node[0].style.cssText.split('; ')[2].split(':')[1].split('px')[0]

// for (let i = 1; i < window.dancers.length; i++) {
//   var topValue1 = window.dancers[i-1].$node[0].style.cssText.split('; ')[1].split(':')[1].split('px')[0];
//   var topValue2 = window.dancers[i].$node[0].style.cssText.split('; ')[1].split(':')[1].split('px')[0];
//   var leftValue1 = window.dancers[i-1].$node[0].style.cssText.split('; ')[2].split(':')[1].split('px')[0];
//   var leftValue2 = window.dancers[i].$node[0].style.cssText.split('; ')[2].split(':')[1].split('px')[0];
//   distance = Math.sqrt(((topValue1 - topValue2) ** 2) + ((leftValue1 - leftValue2) ** 2));

//   console.log(window.dancers[i].$node[0].style.cssText.split('; ')[1].split(':')[1].split('px')[0]);
// }