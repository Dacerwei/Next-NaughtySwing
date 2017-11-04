'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Breakpoint = require('./Breakpoint');

var _Breakpoint2 = _interopRequireDefault(_Breakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DesktopBreakpoint = function DesktopBreakpoint(props) {
    return _react2.default.createElement(_Breakpoint2.default, { name: 'desktop' }, props.children);
};

exports.default = DesktopBreakpoint;