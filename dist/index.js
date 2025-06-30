"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=u(function(q,n){
var a=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-assert-is-infinite/dist'),f=require('@stdlib/math-base-special-floor/dist');function v(r){var e,i;return a(r)||s(r)||r===0?r:(i=f(r),e=r-i,e>.5?i+1:e<.5||i%2===0?i:i+1)}n.exports=v
});var o=t();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
