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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);

        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }

    (0, _createClass3.default)(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'Header'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', null, 'About Page'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/portfolio' }, _react2.default.createElement('a', null, 'Portfolio Page'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/coop' }, _react2.default.createElement('a', null, 'Co-op Page'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/classes' }, _react2.default.createElement('a', null, 'Classes Page'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/events' }, _react2.default.createElement('a', null, 'Events Page')))), this.props.children);
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;