webpackJsonp([3],{

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	__webpack_require__(260);
	
	var Expect = (function (_React$Component) {
		_inherits(Expect, _React$Component);
	
		function Expect() {
			_classCallCheck(this, Expect);
	
			_get(Object.getPrototypeOf(Expect.prototype), 'constructor', this).call(this);
		}
	
		_createClass(Expect, [{
			key: 'backApp',
			value: function backApp() {
				window.location.href = "cmblife://go?url=ApplyCard";
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'section',
					{ className: 'box verticalBox', id: 'expect' },
					_react2['default'].createElement('div', null),
					_react2['default'].createElement(
						'div',
						{ className: 'box verticalBox' },
						_react2['default'].createElement('div', { className: 'smileTip' }),
						_react2['default'].createElement('div', { className: 'notinlistTip' }),
						_react2['default'].createElement(
							'div',
							{ className: 'expect' },
							'将陆续对所有用户开放'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'expect' },
							'我们正在努力调试，期待在春暖花开之时与您相见！'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'box backButton', onClick: this.backApp },
							'返回'
						),
						_react2['default'].createElement('div', { className: 'defaultHeight' })
					)
				);
			}
		}]);
	
		return Expect;
	})(_react2['default'].Component);
	
	exports['default'] = Expect;
	module.exports = exports['default'];

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(261);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(229)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(225)();
	// imports
	
	
	// module
	exports.push([module.id, "section#expect > div:first-child{\r\n    background:-webkit-linear-gradient(top, #d2d2d2, #EEEEEE);\r\n    width: 100%;\r\n    height: 10%;\r\n}\r\nsection#expect > div:last-child{\r\n    width: 100%;\r\n    height: 90%;\r\n    background:-webkit-linear-gradient(top, #eee, #fff);\r\n}\r\n.smileTip{\r\n    width:11.43rem;\r\n    height: 11.43rem;\r\n    background-image: url(" + __webpack_require__(262) + ");\r\n    background-size: cover;\r\n    margin-bottom: 20px;\r\n}\r\n.notinlistTip{\r\n    width:12.86rem;\r\n    height: 1.14rem;\r\n    background-image: url(" + __webpack_require__(263) + ");\r\n    background-size: cover;\r\n    margin-top:0.643rem;\r\n    margin-bottom:1.072rem;\r\n}\r\n.expect{\r\n    font-size: 0.9rem;\r\n    height: 1.5rem;\r\n    color: #5F606D;\r\n}\r\n.backButton{\r\n    margin-top: 2rem;\r\n    height: 2.5rem;\r\n    width: 7.5rem;\r\n    background-color:#FFFFFF;\r\n    border: 2px solid #00ABF3;\r\n    color: #00ABF3;\r\n    border-radius: 15rem;\r\n}\r\n.defaultHeight{\r\n    height: 11.1%;\r\n}", ""]);
	
	// exports


/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "82644048027539ddb50a5a2d29ecdb79.png";

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c5f895691f9e476c013b27754661a153.png";

/***/ }

});
//# sourceMappingURL=3.bundle.0b54c0308cd47e66cbfb.js.map