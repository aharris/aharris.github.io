var App = window.App || {

  beacon: $('.beacon').css('width'),

  // Store the beacon Value
  lastBeacon: this.beacon,

  init: function () {
    // Fire the initial functions for first screen size
    this.getBeacon(this.beacon);
  },

  resize: function () {
    var newBeacon = $('.beacon').css('width');

    // If the screen size has changed fire the functions for the new screen size
    if (this.lastBeacon !== newBeacon) {
      this.lastBeacon = newBeacon;
      this.getBeacon(newBeacon);
    }
  },

  getBeacon: function(beacon) {
    switch(beacon) {
      case "0px":
        this.smallStuff();
        break;
      case "768px":
        this.mediumStuff();
        break;
      case "1024px":
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