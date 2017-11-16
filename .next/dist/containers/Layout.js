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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/xujinwei/next-naughtyswing/containers/Layout.js';


var Layout = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);

    function Layout(props) {
        (0, _classCallCheck3.default)(this, Layout);

        return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));
    }

    (0, _createClass3.default)(Layout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_MuiThemeProvider2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement('div', { id: 'container', className: 'jsx-1500816519',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_Head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement(_Header2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), this.props.children, _react2.default.createElement(_style2.default, {
                styleId: '1500816519',
                css: '.naughty{color:orange;}.highlight-container{background-color:black;color:white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCdUMsQUFHMEMsQUFJVSxhQUgzQixVQUlnQixZQUNoQiIsImZpbGUiOiJjb250YWluZXJzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveHVqaW53ZWkvbmV4dC1uYXVnaHR5c3dpbmciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhUTUxIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8SFRNTEhlYWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXVnaHR5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlnaGxpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=containers/Layout.js */'
            })));
        }
    }]);

    return Layout;
}(_react2.default.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSFRNTEhlYWQiLCJIZWFkZXIiLCJNdWlUaGVtZVByb3ZpZGVyIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0lBRWMsQTtvQ0FDakI7O29CQUFBLEFBQVksT0FBTzs0Q0FBQTs7cUlBQUEsQUFDVCxBQUNUOzs7OztpQ0FDUSxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQSxTQUFLLElBQUwsQUFBUSx3QkFBUjs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQURKLEFBQ0ksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsQUFBQzs7OEJBQUQ7Z0NBRkosQUFFSSxBQUNDO0FBREQ7QUFBQSxxQkFDQyxBQUFLLE1BSFYsQUFHZ0I7eUJBSGhCO3FCQUZSLEFBQ0ksQUFDSSxBQWlCWDtBQWpCVzs7Ozs7RUFQb0IsZ0JBQU0sQTs7a0JBQXJCLEEiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy94dWppbndlaS9uZXh0LW5hdWdodHlzd2luZyJ9