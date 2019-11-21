var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
  exec(success, error, 'PrinterKPlugin', 'coolMethod', [arg0]);
};

exports.printerInit = function () {
  return new Promise(function (resolve, reject) {
    cordova.exec(resolve, reject, "PrinterKPlugin", "printerInit", []);
  });
},

exports.printLogo = function () {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "PrinterKPlugin", "printLogo", []);
  });
};

exports.printContactLess = function () {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "PrinterKPlugin", "printContactLess", []);
  });
};

exports.printColumnsText = function (colsTextArr, colsWidthArr, colsAlign) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "PrinterKPlugin", "printColumnsText", [colsTextArr, colsWidthArr, colsAlign]);
  });
};

exports.printText = function (text) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "PrinterKPlugin", "printText", [text]);
  });
};

exports.setAlignMode = function (type) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "PrinterKPlugin", "alignmode", [type]);
  });
};

exports.setFontZoom = function (hor, ver) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "PrinterKPlugin", "fontzoom", [hor, ver]);
  });
};



exports.pixelWrap = function (n) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "PrinterKPlugin", "prixelwrap", [n]);
  });
};

exports.lineWrap = function (n) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "PrinterKPlugin", "linewrap", [n]);
  });
};




exports.cutPaper = function (mode, distance) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, "PrinterKPlugin", "cutPaper", [mode, distance]);
  });
};
