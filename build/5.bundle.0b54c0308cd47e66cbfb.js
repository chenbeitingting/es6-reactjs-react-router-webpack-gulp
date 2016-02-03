webpackJsonp([5],{

/***/ 240:
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
	
	__webpack_require__(241);
	
	var Header = (function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header() {
	        _classCallCheck(this, Header);
	
	        _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).call(this);
	        this.back = this.back.bind(this);
	        this.help = this.help.bind(this);
	    }
	
	    _createClass(Header, [{
	        key: 'back',
	        value: function back() {
	            var url = this.props.backUrl;
	            if (url) {
	                window.location.href = url;
	            } else {
	                window.history.back();
	            }
	        }
	    }, {
	        key: 'help',
	        value: function help() {
	            window.location.hash = "help";
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'header',
	                { className: 'box' },
	                _react2['default'].createElement('div', { className: 'backApp', onTouchTap: this.back }),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'title' },
	                    '我的信用分'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'box' },
	                    _react2['default'].createElement('div', { onTouchTap: this.help, className: this.props.help ? "mp-faq" : "hidec" }),
	                    _react2['default'].createElement('div', { onTouchTap: this.props.shareFunc, className: this.props.share ? "share" : "hidec" })
	                )
	            );
	        }
	    }]);
	
	    return Header;
	})(_react2['default'].Component);
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(242);
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

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(225)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },

/***/ 269:
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
	
	var _header = __webpack_require__(240);
	
	var _header2 = _interopRequireDefault(_header);
	
	__webpack_require__(270);
	
	var Help = (function (_React$Component) {
	    _inherits(Help, _React$Component);
	
	    function Help() {
	        _classCallCheck(this, Help);
	
	        _get(Object.getPrototypeOf(Help.prototype), 'constructor', this).call(this);
	    }
	
	    _createClass(Help, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { id: 'problemMainPage' },
	                _react2['default'].createElement(_header2['default'], null),
	                _react2['default'].createElement(Content, null)
	            );
	        }
	    }]);
	
	    return Help;
	})(_react2['default'].Component);
	
	var Content = (function (_React$Component2) {
	    _inherits(Content, _React$Component2);
	
	    function Content() {
	        _classCallCheck(this, Content);
	
	        _get(Object.getPrototypeOf(Content.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Content, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'main' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'bigTitle' },
	                    '常见问题应答'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'subTitle' },
	                    '1.信用分是怎么得来的？'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'content' },
	                    '掌上生活信用分由专业的风险研究人员对大量数据进行分析建模，将信用状况这样一个抽象的概念科学地量化成一个直观的数值。'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'subTitle' },
	                    '2.信用分多久更新？'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'content' },
	                    '掌上生活信用分每月17号更新，请定期查看，关注您的信用分变化。'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'subTitle' },
	                    '3.信用分高就一定能提升额度吗？'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'content' },
	                    '掌上生活信用分是我行判断客户调额资格的参考依据之一，最终的调额资格和幅度仍以系统综合评估判定结果为准。例如，一名客户的掌上生活信用分达到优秀水平，但是他/她近期的信用卡额度使用率较低，系统仍将判定无法提升额度。'
	                )
	            );
	        }
	    }]);
	
	    return Content;
	})(_react2['default'].Component);
	
	exports['default'] = Help;
	module.exports = exports['default'];

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(271);
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

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(225)();
	// imports
	
	
	// module
	exports.push([module.id, "#problemMainPage{\n    height: 100%;\n}\n#problemMainPage .main {\n    padding: 1.428rem 1.428rem 0px 1.428rem;\n    height: 100%;\n    background-color: #eeeeee;\n    padding-top: 4.2rem;\n    box-sizing: border-box;\n}\n\n#problemMainPage .bigTitle {\n    width: 100%;\n    font-size: 1.2rem;\n    margin : 0 auto 1.428rem 0;\n    /*margin-bottom: 1.428rem;*/\n    text-align: center;\n}\n\n#problemMainPage .subTitle {\n    font-size: 1.0rem;\n    color: #202020;\n    margin-bottom: 0.5rem;\n}\n\n#problemMainPage .content {\n    font-size: 0.85rem;\n    color: #5F606D;\n    line-height: 1.5rem;\n    margin-bottom: 0.5rem;\n}", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=5.bundle.0b54c0308cd47e66cbfb.js.map