var App = window.App || {

  beacon: $('.beacon').css('content'),

  // Store the beacon Value
  lastBeacon: this.beacon,

  init: function () {
    // Fire the initial functions for first screen size
    this.getBeacon(this.beacon);
  },

  resize: function () {
    var newBeacon = $('.beacon').css('content');

    // If the screen size has changed fire the functions for the new screen size
    if (this.lastBeacon !== newBeacon) {
      this.lastBeacon = newBeacon;
      this.getBeacon(newBeacon);
    }
  },

  getBeacon: function(beacon) {
    switch(beacon) {
      case 'small':
        this.smallStuff();
        break;
      case 'medium':
        this.mediumStuff();
        break;
      case 'large':
        this.largeStuff();
        break;
      default:
        console.log('Error: No beacon match found');
    }
  },

  smallStuff: function() {
    $('body').css('background-color', 'red');
    $('.size').text('Default (small) function fired');
  },

  mediumStuff: function() {
    $('body').css('background-color', 'blue');
    $('.size').text('Medium function fired');

  },

  largeStuff: function() {
    $('body').css('background-color', 'green');
    $('.size').text('Large function fired');

  }

};

$().ready(function () {
  App.init();
});

$(window).resize(function () {
  App.resize();
});