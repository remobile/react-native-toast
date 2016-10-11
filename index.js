'use strict';


var ReactNative = require('react-native');
var {
    NativeModules
} = ReactNative;

var RCTToast= NativeModules.Toast;
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
    RCTToast.show(options);
};

var showToast = function (message, duration, position) {
  showWithOptions(
      optionsBuilder()
          .withMessage(message||'未知数据')
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
  RCTToast.hide();
};

module.exports = Toast;
