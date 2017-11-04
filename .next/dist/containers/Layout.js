'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _DesktopBreakpoint = require('../responsive_utilities/DesktopBreakpoint');

var _DesktopBreakpoint2 = _interopRequireDefault(_DesktopBreakpoint);

var _TabletBreakpoint = require('../responsive_utilities/TabletBreakpoint');

var _TabletBreakpoint2 = _interopRequireDefault(_TabletBreakpoint);

var _PhoneBreakpoint = require('../responsive_utilities/PhoneBreakpoint');

var _PhoneBreakpoint2 = _interopRequireDefault(_PhoneBreakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/xujinwei/next-naughtyswing/containers/Layout.js';


var Layout = function (_React$Component) {
	(0, _inherits3.default)(Layout, _React$Component);

	function Layout() {
		(0, _classCallCheck3.default)(this, Layout);

		return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
	}

	(0, _createClass3.default)(Layout, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			window.scrollTo(0, 0);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { id: 'container', __source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, _react2.default.createElement(_Head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}), _react2.default.createElement(_Header2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement(_DesktopBreakpoint2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, _react2.default.createElement('h2', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, 'desktop header')), _react2.default.createElement(_TabletBreakpoint2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, _react2.default.createElement('h2', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, 'tablet header')), _react2.default.createElement(_PhoneBreakpoint2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, _react2.default.createElement('h2', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, 'mobile header'))), this.props.children);
		}
	}]);

	return Layout;
}(_react2.default.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiSFRNTEhlYWQiLCJEZXNrdG9wQnJlYWtwb2ludCIsIlRhYmxldEJyZWFrcG9pbnQiLCJQaG9uZUJyZWFrcG9pbnQiLCJMYXlvdXQiLCJwcmV2UHJvcHMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUF1Qjs7OztBQUM5QixBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQU8sQUFBcUI7Ozs7Ozs7OztJQUVQLEE7Ozs7Ozs7Ozs7O3FDQUNELEEsV0FBVyxBQUM1QjtVQUFBLEFBQU8sU0FBUCxBQUFnQixHQUFoQixBQUFtQixBQUNwQjs7OzsyQkFDUSxBQUNSOzBCQUNDLGNBQUEsU0FBSyxJQUFMLEFBQVE7ZUFBUjtpQkFBQSxBQUNhO0FBRGI7SUFBQSxrQkFDYSxBQUFDOztlQUFEO2lCQURiLEFBQ2EsQUFDWjtBQURZO0FBQUEsdUJBQ1osQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ21CO0FBRG5CO0FBQUEsc0JBQ21CLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BRnBCLEFBQ0MsQUFDbUIsQUFFbkIsb0NBQUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNtQjtBQURuQjtBQUFBLHNCQUNtQixjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUxwQixBQUlDLEFBQ21CLEFBRW5CLG1DQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDbUI7QUFEbkI7QUFBQSxzQkFDbUIsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFWckIsQUFFQyxBQU9DLEFBQ21CLEFBR2xCLHlCQUFBLEFBQUssTUFkVCxBQUNDLEFBYWMsQUFHZjs7Ozs7RUF0QmtDLGdCQUFNLEE7O2tCQUFyQixBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveHVqaW53ZWkvbmV4dC1uYXVnaHR5c3dpbmcifQ==