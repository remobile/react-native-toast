'use strict';

var React = require('react-native');
var {
    NativeModules
} = React;

var CRTToast= NativeModules.Toast;
var Toast = {};

var optionsBuilder = function () {

  // defaults
  var message = null;
  var duration = "short";
  var position = "center";
  var addPixelsY = 0;

  return {
    withMessage: function(m) {
      message = m;
      return this;
    },

    withDuration: function(d) {
      duration = d;
      return this;
    },

    withPosition: function(p) {
      position = p;
      return this;
    },

    withAddPixelsY: function(y) {
      addPixelsY = y;
      return this;
    },

    build: function() {
      return {
        message: message,
        duration: duration,
        position: position,
        addPixelsY: addPixelsY
      }
    }
  }
};


var showWithOptions = function (options) {
    CRTToast.show(options);
};

var showToast = function (message, duration, position) {
  showWithOptions(
      optionsBuilder()
          .withMessage(message)
          .withDuration(duration)
          .withPosition(position)
          .build()
      );
};

Toast.showShortTop = function (message) {
  showToast(message, "short", "top");
};

Toast.showShortCenter = function (message) {
  showToast(message, "short", "center");
};

Toast.showShortBottom = function (message) {
  showToast(message, "short", "bottom");
};

Toast.showLongTop = function (message) {
  showToast(message, "long", "top");
};

Toast.showLongCenter = function (message) {
  showToast(message, "long", "center");
};

Toast.showLongBottom = function (message) {
  showToast(message, "long", "bottom");
};

Toast.show = function (message) {
  showToast(message, "short", "bottom");
};

Toast.hide = function () {
  CRTToast.hide();
};

module.exports = Toast;
