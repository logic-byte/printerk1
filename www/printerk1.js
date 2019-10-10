var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
  exec(success, error, 'printerk1', 'coolMethod', [arg0]);
};

exports.printerInit = function () {
  return new Promise(function (resolve, reject) {
    cordova.exec(resolve, reject, "printerk1", "printerInit", []);
  });
},

exports.printColumnsText = function (colsTextArr, colsWidthArr, colsAlign) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "printerk1", "printColumnsText", [colsTextArr, colsWidthArr, colsAlign]);
  });
};

exports.printText = function (text) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "printerk1", "printText", [text]);
  });
};

exports.setAlignMode = function (type) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "printerk1", "alignmode", [type]);
  });
};

exports.setFontZoom = function (hor, ver) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "printerk1", "fontzoom", [hor, ver]);
  });
};



exports.pixelWrap = function (n) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "printerk1", "prixelwrap", [n]);
  });
};

exports.lineWrap = function (n) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "printerk1", "linewrap", [n]);
  });
};




exports.cutPaper = function (mode, distance) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "printerk1", "cutPaper", [mode, distance]);
  });
};
