'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpoints = {
    desktop: '(min-width: 1025px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    phone: '(max-width: 767px)'
};

var Breakpoint = function (_React$Component) {
    (0, _inherits3.default)(Breakpoint, _React$Component);

    function Breakpoint(props) {
        (0, _classCallCheck3.default)(this, Breakpoint);

        return (0, _possibleConstructorReturn3.default)(this, (Breakpoint.__proto__ || (0, _getPrototypeOf2.default)(Breakpoint)).call(this, props));
    }

    (0, _createClass3.default)(Breakpoint, [{
        key: 'render',
        value: function render() {
            var name = this.props.name;

            var breakpoint = breakpoints[name] || breakpoints.desktop;

            return _react2.default.createElement(_reactResponsive2.default, (0, _extends3.default)({}, this.props, { query: breakpoint }), this.props.children);
        }
    }]);

    return Breakpoint;
}(_react2.default.Component);

exports.default = Breakpoint;