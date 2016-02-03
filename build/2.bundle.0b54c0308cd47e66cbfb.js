webpackJsonp([2],{

/***/ 253:
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
	
	__webpack_require__(254);
	
	var Bind = (function (_React$Component) {
	    _inherits(Bind, _React$Component);
	
	    function Bind() {
	        _classCallCheck(this, Bind);
	
	        _get(Object.getPrototypeOf(Bind.prototype), 'constructor', this).call(this);
	    }
	
	    _createClass(Bind, [{
	        key: 'applyNow',
	        value: function applyNow() {
	            window.location.href = "cmblife://go?url=ApplyCard";
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'bind' },
	                _react2['default'].createElement('div', { className: 'top' }),
	                _react2['default'].createElement('div', { className: 'bottom' }),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'content box verticalBox' },
	                    _react2['default'].createElement('div', { className: 'sunflower' }),
	                    _react2['default'].createElement('div', { className: 'bindTitle' }),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'paragraph0 box' },
	                        '将陆续对所有用户开放'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'paragraph1 box verticalBox' },
	                        _react2['default'].createElement(
	                            'div',
	                            null,
	                            '持招商银行信用卡的客户'
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            null,
	                            '将会得到更全面、准确的评价'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'paragraph2 box verticalBox' },
	                        _react2['default'].createElement(
	                            'div',
	                            null,
	                            '没有招行信用卡？现在就申请，持卡半年后'
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            null,
	                            '就可尝试查询您的掌上生活信用分啦！'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'buttonBox box' },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'button', onClick: this.applyNow },
	                            '立即申请'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Bind;
	})(_react2['default'].Component);
	
	exports['default'] = Bind;
	module.exports = exports['default'];

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(255);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(229)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(225)();
	// imports
	
	
	// module
	exports.push([module.id, ".top {\r\n    background: -webkit-gradient(linear, 0 0, 0 100%, from(#D2D2D2), to(#EEEEEE));\r\n    height: 10%;\r\n}\r\n\r\n.bottom {\r\n    background: -webkit-gradient(linear, 0 0, 0 100%, from(#EEEEEE), to(#FFFFFF));\r\n    height: 90%;\r\n}\r\n\r\n.bind {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.content {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 90%;\r\n}\r\n\r\n.sunflower {\r\n    width: 100%;\r\n    height: 11.429rem;\r\n    margin: 0 auto;\r\n    background-image: url(" + __webpack_require__(256) + ");\r\n    background-size: 11.429rem 11.429rem;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n}\r\n\r\n.bindTitle {\r\n    width: 100%;\r\n    margin: 1.2rem auto;\r\n    height: 1.143rem;\r\n    background-image: url(" + __webpack_require__(257) + ");\r\n    background-size: 12.857rem 1.143rem;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n}\r\n\r\n.paragraph0 {\r\n    width: 100%;\r\n    height: 1.5rem;\r\n    line-height: 1.5rem;\r\n    color: #5F606D;\r\n    font-size: 1rem;\r\n}\r\n\r\n.paragraph1 {\r\n    width: 100%;\r\n    color: #999999;\r\n    font-size: 1rem;\r\n    line-height: 1.8em;\r\n    padding: 1rem 2rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.paragraph2 {\r\n    width: 100%;\r\n    color: #00ABF3;\r\n    font-size: 0.9rem;\r\n    line-height: 1.8em;\r\n    height: 5rem;\r\n}\r\n.buttonBox{\r\n    margin-top: 1.5rem;\r\n    width: 100%;\r\n}\r\n.button {\r\n    width: 7.5rem;\r\n    background-color: #00ABF3;\r\n    color: #FFFFFF;\r\n    border-radius: 15rem;\r\n    line-height: 2.5rem;\r\n    margin: 0 auto;\r\n}", ""]);
	
	// exports


/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "82644048027539ddb50a5a2d29ecdb79.png";

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c5f895691f9e476c013b27754661a153.png";

/***/ }

});
//# sourceMappingURL=2.bundle.0b54c0308cd47e66cbfb.js.map