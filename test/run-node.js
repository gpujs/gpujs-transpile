// Setup chai assert - for nodejs
assert = require('chai').assert;

// Setup esprima library
esprima = require('esprima');

// Esprima based transpiler
transpiler_esprima = require('../bin/transpiler_esprima.js');

// Setup chai assert
require("./run-suite.js");
