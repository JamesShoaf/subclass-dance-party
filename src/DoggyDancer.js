var DoggyDancer = function(top, left, timeBetweenSteps) {
  this.id = `${parseInt(top)}${parseInt(timeBetweenSteps)}`;
  this.$node = $(`<img class ="twisty dancer" id=${this.id} src=${this.dogChooser()} alt="#">`);
  Dancer.call(this, top, left, timeBetweenSteps);


};

DoggyDancer.prototype = Object.create(Dancer.prototype);
DoggyDancer.constructor = DoggyDancer;
DoggyDancer.prototype.oldStep = this.step;

DoggyDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // this.$node.animate().rotate(30);
  //this.$node.toggleClass('twisty', 1000, 'dancer');
  //.animate('shake')
};

DoggyDancer.prototype.dogChooser = function() {
  var dogChoices = [
    'https://images-ra.adoptapet.com/seo/1/h/803_h.png', //one handsome boy
    'https://upload.wikimedia.org/wikipedia/commons/d/d0/Beauceron_3_semaines.png', //pupperino
    'https://t1.pixers.pics/img-d5043af1/stickers-beauceron-french-dog.png?H4sIAAAAAAAAA5VPy26EMAz8HZAAGxKHxwfsdT8BJVlnl26AiLDttl_foKo9VOqh8sH2eDxjw2OJ2jFYXnbeYJ4uF8_gJp-6OGwcpw_OsGhR5kNCfYaI-bC-8ma3NWRl3aqi7LqDULR9kw9vOm3Oertnt30PcQCIogrTM8mlZCPYOUKDdQuogHpS6GzD1DdmXPTdJ2YpnrIKy7XAI_JBh-Dfx42TZ-RR-3DT_9AWXS2s-9H-5ZF_vygRC3m85tZ0_Z4dM_jD5auGRIfTGRQBSaBkeCDj6ayIJCkayahW6NpoJy_kDAqunUQhTdcwd2Sql3D9BHqXEVZ_AQAA', //why are all these dogs so cute
    'https://www.feudubonheur.eu/wp-content/uploads/2016/02/puppy_circle.png', //are you kidding me
    'https://images-ra.adoptapet.com/seo/1/sc/803_sc.png' //what a smile
  ];
  return dogChoices[Math.floor(Math.random() * 5)];
};