"use strict";var _interopRequireWildcard=require("@babel/runtime-corejs2/helpers/interopRequireWildcard");var _interopRequireDefault=require("@babel/runtime-corejs2/helpers/interopRequireDefault");var _Object$defineProperty=require("@babel/runtime-corejs2/core-js/object/define-property");_Object$defineProperty(exports,"__esModule",{value:true});exports.lint=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));var _ndkUtilities=require("@nuofe/ndk-utilities");var _child_process=require("child_process");var Lint=_interopRequireWildcard(require("./lint"));var LintOptions=_interopRequireWildcard(require("./lint-options"));var updateToLatest=function(){var _ref=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(){var _require,name,version;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_require=require("../package.json"),name=_require.name,version=_require.version;_context.next=3;return _ndkUtilities.Options.updateToLatest(name,version);case 3:case"end":return _context.stop();}}},_callee)}));return function updateToLatest(){return _ref.apply(this,arguments)}}();var lint=function(){var _ref2=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(param){var config,options,cwd,_spawnSync,status;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(param===true)){_context2.next=5;break}_context2.next=3;return updateToLatest();case 3:_context2.next=6;break;case 5:config=param;case 6:_context2.next=8;return LintOptions.init(config);case 8:options=_context2.sent;cwd=options.cwd;_context2.next=12;return Lint.check(options);case 12:_spawnSync=(0,_child_process.spawnSync)("yarn",["lint"],{cwd:cwd,stdio:"inherit"}),status=_spawnSync.status;if(status!==0){console.log();console.log("[i] \u4EE3\u7801\u68C0\u6D4B\u672A\u901A\u8FC7\uFF0C\u8BF7\u4FEE\u590D\uFF01");process.exit(1)}case 14:case"end":return _context2.stop();}}},_callee2)}));return function lint(_x){return _ref2.apply(this,arguments)}}();exports.lint=lint;