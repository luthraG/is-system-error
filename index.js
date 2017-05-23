'use strict';

//
// Global Imports
//
var NODE_RATIFY = require('node-ratify');

//
// Local Imports
//
var CONSTANTS   = require('./constants.js');

exports = module.exports = {
    isSystemError : function(error) {
        if (!NODE_RATIFY.isError(error) || !(error && error.code)) {
            return false;
        } else {
            return CONSTANTS['SYSTEM_ERROR_CODES'][error.code];
        }
    }
};