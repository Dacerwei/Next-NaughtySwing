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

var _DesktopBreakpoint = require('../responsive_utilities/DesktopBreakpoint');

var _DesktopBreakpoint2 = _interopRequireDefault(_DesktopBreakpoint);

var _TabletBreakpoint = require('../responsive_utilities/TabletBreakpoint');

var _TabletBreakpoint2 = _interopRequireDefault(_TabletBreakpoint);

var _PhoneBreakpoint = require('../responsive_utilities/PhoneBreakpoint');

var _PhoneBreakpoint2 = _interopRequireDefault(_PhoneBreakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			return _react2.default.createElement('div', { id: 'container' }, _react2.default.createElement(_Header2.default, null, _react2.default.createElement(_DesktopBreakpoint2.default, null, _react2.default.createElement('h2', null, 'desktop header')), _react2.default.createElement(_TabletBreakpoint2.default, null, _react2.default.createElement('h2', null, 'tablet header')), _react2.default.createElement(_PhoneBreakpoint2.default, null, _react2.default.createElement('h2', null, 'mobile header'))), this.props.children);
		}
	}]);

	return Layout;
}(_react2.default.Component);

exports.default = Layout;