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

var Events = function (_React$Component) {
    (0, _inherits3.default)(Events, _React$Component);

    function Events() {
        (0, _classCallCheck3.default)(this, Events);

        return (0, _possibleConstructorReturn3.default)(this, (Events.__proto__ || (0, _getPrototypeOf2.default)(Events)).apply(this, arguments));
    }

    (0, _createClass3.default)(Events, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, 'Home')), _react2.default.createElement('h1', null, 'Events'));
        }
    }]);

    return Events;
}(_react2.default.Component);

exports.default = Events;