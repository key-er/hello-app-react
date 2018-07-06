'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      username: null,
      passwd: null
    };
    return _this;
  }

  _createClass(App, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var data = { email: document.getElementById('email').value, password: document.getElementById('pwd').value };
      $.post('/login', data, function (err, resp) {});
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { id: 'login', onSubmit: this.handleSubmit.bind(this) },
          React.createElement('input', { type: 'email', id: 'email', placeholder: 'email', name: 'email' }),
          React.createElement('input', { type: 'password', id: 'pwd', placeholder: 'password', name: 'passwd' }),
          React.createElement('input', { type: 'submit', value: 'Login' })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJlbWFpbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiJCIsInBvc3QiLCJlcnIiLCJyZXNwIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxjQUFRO0FBRkcsS0FBYjtBQUZpQjtBQU1sQjs7OztpQ0FHWUMsSyxFQUFPO0FBQ2xCQSxZQUFNQyxjQUFOO0FBQ0EsVUFBSUMsT0FBTyxFQUFDQyxPQUFPQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUF6QyxFQUFnREMsVUFBVUgsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixFQUErQkMsS0FBekYsRUFBWDtBQUNBRSxRQUFFQyxJQUFGLENBQU8sUUFBUCxFQUFpQlAsSUFBakIsRUFBdUIsVUFBU1EsR0FBVCxFQUFjQyxJQUFkLEVBQW9CLENBQzFDLENBREQ7QUFHRDs7OzZCQUdRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBTSxJQUFHLE9BQVQsRUFBaUIsVUFBVSxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUEzQjtBQUNFLHlDQUFPLE1BQUssT0FBWixFQUFvQixJQUFHLE9BQXZCLEVBQStCLGFBQVksT0FBM0MsRUFBbUQsTUFBSyxPQUF4RCxHQURGO0FBRUUseUNBQU8sTUFBSyxVQUFaLEVBQXVCLElBQUcsS0FBMUIsRUFBZ0MsYUFBWSxVQUE1QyxFQUF3RCxNQUFLLFFBQTdELEdBRkY7QUFHRSx5Q0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxPQUEzQjtBQUhGO0FBRkYsT0FERjtBQVdEOzs7O0VBL0JlQyxNQUFNQyxTOztBQXNDeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QmIsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiBudWxsLFxuICAgICAgcGFzc3dkOiBudWxsXG4gICAgfVxuICB9XG5cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBkYXRhID0ge2VtYWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZSwgcGFzc3dvcmQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2QnKS52YWx1ZX1cbiAgICAkLnBvc3QoJy9sb2dpbicsIGRhdGEsIGZ1bmN0aW9uKGVyciwgcmVzcCkge1xuICAgIH0pXG5cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxmb3JtIGlkPVwibG9naW5cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwd2RcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgIG5hbWU9XCJwYXNzd2RcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIC8+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgPC9kaXY+KVxuXG4gIH1cbn1cblxuXG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdfQ==