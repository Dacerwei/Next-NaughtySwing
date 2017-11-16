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

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/xujinwei/next-naughtyswing/components/Header.js';


var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header(props) {
        (0, _classCallCheck3.default)(this, Header);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

        _this.state = {
            open: false
        };
        _this.openMenu = _this.openMenu.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Header, [{
        key: 'openMenu',
        value: function openMenu() {
            this.setState({
                open: !this.state.open
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_RaisedButton2.default, {
                label: 'Menu',
                onClick: this.openMenu, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement(_Drawer2.default, { width: 300, openSecondary: true, open: this.state.open, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_link2.default, { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Home'))), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'About'))), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_link2.default, { href: '/portfolio', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Portfolio'))), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_link2.default, { href: '/coop', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Co-op'))), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_link2.default, { href: '/classes', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Classes'))), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_link2.default, { href: '/events', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Events'))))));
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkRyYXdlciIsIlJhaXNlZEJ1dHRvbiIsIkhlYWRlciIsInByb3BzIiwic3RhdGUiLCJvcGVuIiwib3Blbk1lbnUiLCJiaW5kIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0lBRWMsQTtvQ0FDakI7O29CQUFBLEFBQVksT0FBTzs0Q0FBQTs7MElBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7a0JBQUwsQUFBYSxBQUNILEFBRVY7QUFIYSxBQUNUO2NBRUosQUFBSyxXQUFXLE1BQUEsQUFBSyxTQUFMLEFBQWMsS0FMZixBQUtmO2VBQ0g7Ozs7O21DQUVVLEFBQ1A7aUJBQUEsQUFBSztzQkFDSyxDQUFDLEtBQUEsQUFBSyxNQURoQixBQUFjLEFBQ1EsQUFFekI7QUFIaUIsQUFDVjs7OztpQ0FJQyxBQUNMO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQzt1QkFBRCxBQUNVLEFBQ047eUJBQVMsS0FGYixBQUVrQjs4QkFGbEI7Z0NBREosQUFDSSxBQUdBO0FBSEE7QUFDSSxnQ0FFSixBQUFDLGtDQUFPLE9BQVIsQUFBZSxLQUFLLGVBQXBCLEFBQW1DLE1BQU0sTUFBTSxLQUFBLEFBQUssTUFBcEQsQUFBMEQ7OEJBQTFEO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSFosQUFDSSxBQUNJLEFBQ0ksQUFHUiwyQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBUlosQUFNSSxBQUNJLEFBQ0ksQUFHUiw0QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBYlosQUFXSSxBQUNJLEFBQ0ksQUFHUixnQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBbEJaLEFBZ0JJLEFBQ0ksQUFDSSxBQUdSLDRCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsZ0NBQUssTUFBTixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUF2QlosQUFxQkksQUFDSSxBQUNJLEFBR1IsOEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQWxDeEIsQUFDSSxBQUlJLEFBQ0ksQUEwQkksQUFDSSxBQUNJLEFBTzNCOzs7OztFQXpEK0IsZ0JBQU0sQTs7a0JBQXJCLEEiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy94dWppbndlaS9uZXh0LW5hdWdodHlzd2luZyJ9