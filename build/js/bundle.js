!function(o){function e(t){if(n[t])return n[t].exports;var r=n[t]={exports:{},id:t,loaded:!1};return o[t].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=o,e.c=n,e.p="/public/assets/js/",e(0)}([/*!******************!*\
  !*** multi main ***!
  \******************/
function(o,e,n){n(/*! ./utils.js */3),o.exports=n(/*! ./app */1)},/*!*****************!*\
  !*** ./app.es6 ***!
  \*****************/
function(o,e,n){"use strict";var t=n(/*! ./login */2);t.login("admin","admin1/]"),document.write("lorem helltext asdf"),console.log("App loaded")},/*!*******************!*\
  !*** ./login.es6 ***!
  \*******************/
function(o,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(o,e){("admin"!==o||"admin1"!==e)&&console.log("incorrect password")};e.login=n},/*!******************!*\
  !*** ./utils.js ***!
  \******************/
function(o,e){console.log("logging from the utils.js file")}]);
//# sourceMappingURL=bundle.js.map