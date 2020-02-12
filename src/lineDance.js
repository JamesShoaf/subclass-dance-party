var lineDance = function() {
  var halfwayDown = $('body').height() / 2;

  $('.dancer').css('top', halfwayDown + 'px'); // assign to window height/2
};

//2 Lines

var evenLines = function() {
  var halfwayDown = $('body').height() / 2;
  var midwayPoint = $('body').width() / 2;
  if (window.dancers.length === 1) {
    $(`#${window.dancers[0].id}`).css('top', halfwayDown);
    $(`#${window.dancers[0].id}`).css('left', midwayPoint);
    return;
  }
  if (window.dancers.length % 2 === 0) {
    
  } else {

  }
  var widthIncrement = $('body').width() / window.dancers.length;
  for (let i = 0; i < window.dancers.length; i++) {
    $(`#${window.dancers[0].id}`).css('top', halfwayDown);

  }
};