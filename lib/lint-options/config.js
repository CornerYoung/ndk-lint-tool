"use strict";var _interopRequireDefault=require("@babel/runtime-corejs2/helpers/interopRequireDefault");var _Object$defineProperty=require("@babel/runtime-corejs2/core-js/object/define-property");_Object$defineProperty(exports,"__esModule",{value:true});exports.init=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));var _keys=_interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));var _inquirer=_interopRequireDefault(require("inquirer"));var PACKAGE_TYPES={app:"\u79FB\u52A8\u7AEF\u5E94\u7528",web:"\u684C\u9762\u7AEF\u7AD9\u70B9",component:"UI\u7EC4\u4EF6",library:"\u5E93",tool:"\u5DE5\u5177"};var PACKAGE_LANGUAGES={es:"ES(ECMAScript)",ts:"TS(TypeScript)"};var prompt=_inquirer["default"].prompt,Separator=_inquirer["default"].Separator;var getType=function(){var _ref=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(){var choices,_ref2,type;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:choices=(0,_keys["default"])(PACKAGE_TYPES).map(function(item){return{name:"".concat(item,": ").concat(PACKAGE_TYPES[item]),value:item}});_context.next=3;return prompt({type:"list",name:"type",message:"\u8BF7\u9009\u62E9\u5F53\u524D\u5305\u7684\u7C7B\u578B\uFF1A",choices:choices.concat(new Separator)});case 3:_ref2=_context.sent;type=_ref2.type;return _context.abrupt("return",type);case 6:case"end":return _context.stop();}}},_callee)}));return function getType(){return _ref.apply(this,arguments)}}();var getLanguage=function(){var _ref3=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(){var choices,_ref4,type;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:choices=(0,_keys["default"])(PACKAGE_LANGUAGES).map(function(item){return{name:"".concat(item,": ").concat(PACKAGE_LANGUAGES[item]),value:item}});_context2.next=3;return prompt({type:"list",name:"type",message:"\u8BF7\u9009\u62E9\u5F53\u524D\u5305\u4F7F\u7528\u7684\u5F00\u53D1\u8BED\u8A00\uFF1A",choices:choices.concat(new Separator)});case 3:_ref4=_context2.sent;type=_ref4.type;return _context2.abrupt("return",type);case 6:case"end":return _context2.stop();}}},_callee2)}));return function getLanguage(){return _ref3.apply(this,arguments)}}();var init=function(){var _ref5=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(){return _regenerator["default"].wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return getType();case 2:_context3.t0=_context3.sent;_context3.next=5;return getLanguage();case 5:_context3.t1=_context3.sent;return _context3.abrupt("return",{type:_context3.t0,language:_context3.t1});case 7:case"end":return _context3.stop();}}},_callee3)}));return function init(){return _ref5.apply(this,arguments)}}();exports.init=init;