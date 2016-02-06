"use strict";

var name = "EcmaScript";
var version = 2015;

var x = function x() {
  return "hi!";
};

var result = "This is about:\n" + name + " " + (version + 1) + " " + x();

console.log(result);