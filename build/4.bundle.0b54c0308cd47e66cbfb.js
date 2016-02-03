webpackJsonp([4],{

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

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _zeptoModulesEs6_default = __webpack_require__(216);
	
	var _zeptoModulesEs6_default2 = _interopRequireDefault(_zeptoModulesEs6_default);
	
	var SH = (function () {
	    function SH(options) {
	        _classCallCheck(this, SH);
	
	        var defaults = {
	            /**
	             * @param pic {String}
	             * @description ����Сͼ��
	             */
	            pic: "",
	            /**
	             * @param linkUrl {String}
	             * @description ����������
	             */
	            linkUrl: "",
	            /**
	             * @param describe {String}
	             * @description ��������
	             */
	            describe: "",
	            /**
	             * @param short {Boolean}
	             * @description �Ƿ���Ҫ���ö����ӽӿ�
	             */
	            short: false, //�Ƿ���Ҫ���ö����ӽӿ�
	            /**
	             * @param shortUrl {String}
	             * @description �����ӽӿڵ�ַ
	             */
	            shortUrl: "",
	            /**
	             * @param shortParam {String}
	             * @description ������body����
	             */
	            shortParam: "",
	            /**
	             * @param suncFunc {Function}
	             * @description �����Ļص�
	             */
	            suncFunc: function suncFunc() {}
	        };
	        _zeptoModulesEs6_default2["default"].extend(defaults, options);
	        this.initialize(defaults);
	    }
	
	    _createClass(SH, [{
	        key: "initialize",
	        value: function initialize(options) {
	            this.setOptions(options);
	            if (!this.short) {
	                this.shareOs();
	            } else {
	                this.shortPost();
	            }
	        }
	    }, {
	        key: "setOptions",
	        value: function setOptions(options) {
	            _zeptoModulesEs6_default2["default"].extend(this, options);
	        }
	    }, {
	        key: "shortPost",
	        value: function shortPost() {
	            var _this = this;
	            new base().doPost({
	                purl: _this.shortUrl,
	                data: { url: _this.linkUrl, body: _this.shortParam },
	                sucFunc: function sucFunc(data) {
	                    _this.linkUrl = data.shortUrl;
	                    _this.shareOs();
	                },
	                errorFunc: function errorFunc() {
	                    _this.shareOs();
	                },
	                timeOutFunc: function timeOutFunc() {
	                    _this.shareOs();
	                }
	            });
	        }
	    }, {
	        key: "shareOs",
	        value: function shareOs() {
	            var shareData = {
	                content: this.describe,
	                url: this.linkUrl,
	                picUrl: this.pic
	            };
	            console.log(shareData);
	            window.location.href = "cmblife://share?content=" + encodeURIComponent(shareData.content) + "&linkurl=" + encodeURIComponent(shareData.url) + "&picurl=" + encodeURIComponent(shareData.picUrl);
	        }
	    }]);
	
	    return SH;
	})();
	
	exports["default"] = SH;
	module.exports = exports["default"];

/***/ },

/***/ 265:
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
	
	__webpack_require__(266);
	
	var _share = __webpack_require__(251);
	
	var _share2 = _interopRequireDefault(_share);
	
	var Describe = (function (_React$Component) {
	    _inherits(Describe, _React$Component);
	
	    function Describe() {
	        _classCallCheck(this, Describe);
	
	        _get(Object.getPrototypeOf(Describe.prototype), 'constructor', this).call(this);
	    }
	
	    _createClass(Describe, [{
	        key: 'share',
	        value: function share() {
	            var shareUrl = "http://" + window.location.host + "/share.html";
	            new _share2['default']({
	                pic: "http://" + window.location.host + "/public/img/share.png",
	                linkUrl: shareUrl,
	                describe: "我的信用分分享"
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { id: 'faq' },
	                _react2['default'].createElement(_header2['default'], { shareFunc: this.share, share: true, help: true }),
	                _react2['default'].createElement(DescribeContent, null)
	            );
	        }
	    }]);
	
	    return Describe;
	})(_react2['default'].Component);
	
	var DescribeContent = (function (_React$Component2) {
	    _inherits(DescribeContent, _React$Component2);
	
	    function DescribeContent() {
	        _classCallCheck(this, DescribeContent);
	
	        _get(Object.getPrototypeOf(DescribeContent.prototype), 'constructor', this).call(this);
	        this.unfold = this.unfold.bind(this);
	    }
	
	    _createClass(DescribeContent, [{
	        key: 'unfold',
	        value: function unfold() {
	            var domUnfold = _react2['default'].findDOMNode(this.refs.unfold);
	            var domContent = _react2['default'].findDOMNode(this.refs.unfoldContent);
	            domContent.style.display = "block";
	            domUnfold.style.display = "none";
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { id: 'wrapper' },
	                _react2['default'].createElement(
	                    'ul',
	                    { className: 'box verticalBox' },
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'faqImg' },
	                        _react2['default'].createElement('img', { src: './content/describe/img/faq02-c066138df9.png' })
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'faqHeader' },
	                        '它考量哪些方面的信息？'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'faqContent' },
	                        '掌上生活信用分主要考量您的信用卡使用情况，履约记录，与我行往来等信息，同时兼顾您的身份属性以及其他相关的内外部资信。'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'faqImg' },
	                        _react2['default'].createElement('img', { src: './content/describe/img/faq01-c95ddf1754.png' })
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'faqHeader' },
	                        '它有什么用处？'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'faqContent' },
	                        '掌上生活信用分是招商银行信用卡判断客户业务资格的参考依据之一，信用分过低将会失去办理部分业务的资',
	                        _react2['default'].createElement(
	                            'span',
	                            { ref: 'unfoldContent', className: 'hidec' },
	                            '格。经常关注信用分的变化，保持良好的信用卡使用记录，提高信用意识，良好的信用将会获得回报！请持续关注掌上生活信用分版块，未来我们将引入更多权益与优惠！'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { ref: 'unfold', onClick: this.unfold, className: 'unfold box' },
	                        _react2['default'].createElement(
	                            'div',
	                            null,
	                            '展开 '
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            null,
	                            _react2['default'].createElement('img', { src: './content/describe/img/unfold-2d64d85f59.png' })
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'faqImg' },
	                        _react2['default'].createElement('img', { src: './content/describe/img/faq04-7962a65dfc.png' })
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'faqHeader' },
	                        '如何提高掌上生活信用分？'
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'faqContent' },
	                        '保持良好的用卡及消费习惯，每月按时还款，适当提高信用卡的使用频率，参与掌上生活互动，这些行为都将有利于提升你的掌上生活信用分。请密切关注掌上生活我的信用分版块，未来我们将陆续推出提升信用分的小攻略。'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return DescribeContent;
	})(_react2['default'].Component);
	
	exports['default'] = Describe;
	module.exports = exports['default'];

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(267);
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

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(225)();
	// imports
	
	
	// module
	exports.push([module.id, ".faqBody {\n    height: 90%;\n}\n\n#wrapper {\n    padding-top: 3.2rem;\n    box-sizing: border-box;\n    overflow-y: scroll;\n    height: 100%;\n    padding-bottom: 3.2rem;\n}\nul li {\n    list-style:none;\n}\n\n.faqImg {\n    width: 10.7rem;\n    height: 2.9rem;\n    margin-top: 1.43rem;\n}\n\n.faqImg >img {\n    width: 100%;\n}\n\n.faqHeader {\n    font-size: 1rem;\n    color: #202020;\n    margin-top: 0.4rem;\n}\n.faqContent {\n    font-size: 0.8rem;\n    color: #202020;\n    margin-top: 0.9rem;\n    margin-left: 2.1rem;\n    margin-right: 2.1rem;\n}\n\n.unfold {\n    margin-top: 0.64rem;\n    font-size: 0.8rem;\n    color: #00ABF3;\n}\n.unfold >img {\n    width: 0.6rem;\n    height: 0.3rem;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=4.bundle.0b54c0308cd47e66cbfb.js.map