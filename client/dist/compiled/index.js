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
      passwd: null,
      loginView: true,
      signupView: false,
      infoView: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var userdata = { email: document.getElementById('email').value, password: document.getElementById('pwd').value };
      var url = this.state.loginView ? '/login' : this.state.signupView ? '/signup' : this.state.infoView ? '/info' : '/home';
      var self = this;

      debugger;
      $.ajax({
        url: url,
        data: userdata,
        method: 'POST',
        context: self,
        success: function success(result) {
          debugger;
          this.setState({
            loginView: false,
            signupView: false,
            infoView: true
          });
        },

        error: function error(err) {
          if (err.status === 403) {
            debugger;
            this.setState({
              loginView: false,
              signupView: true,
              infoView: false
            });
          }
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      debugger;
      var page = void 0;

      if (this.state.loginView) {
        page = React.createElement(Login, { handleSubmit: this.handleSubmit.bind(this) });
      } else if (this.state.signupView) {
        page = React.createElement(Signup, { handleSubmit: this.handleSubmit.bind(this) });
      } else if (this.state.infoView) {
        page = React.createElement(Signup, { handleSubmit: this.handleSubmit.bind(this) });
      }

      return React.createElement(
        'div',
        null,
        page
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dkIiwibG9naW5WaWV3Iiwic2lnbnVwVmlldyIsImluZm9WaWV3IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJkYXRhIiwiZW1haWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJwYXNzd29yZCIsInVybCIsInNlbGYiLCIkIiwiYWpheCIsImRhdGEiLCJtZXRob2QiLCJjb250ZXh0Iiwic3VjY2VzcyIsInJlc3VsdCIsInNldFN0YXRlIiwiZXJyb3IiLCJlcnIiLCJzdGF0dXMiLCJwYWdlIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxjQUFRLElBRkc7QUFHWEMsaUJBQVcsSUFIQTtBQUlYQyxrQkFBWSxLQUpEO0FBS1hDLGdCQUFVO0FBTEMsS0FBYjtBQUZpQjtBQVNsQjs7OztpQ0FHWUMsSyxFQUFPO0FBQ2xCQSxZQUFNQyxjQUFOO0FBQ0EsVUFBSUMsV0FBVyxFQUFDQyxPQUFPQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUF6QyxFQUFnREMsVUFBVUgsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixFQUErQkMsS0FBekYsRUFBZjtBQUNBLFVBQUlFLE1BQU0sS0FBS2QsS0FBTCxDQUFXRyxTQUFYLEdBQXVCLFFBQXZCLEdBQWtDLEtBQUtILEtBQUwsQ0FBV0ksVUFBWCxHQUF3QixTQUF4QixHQUFvQyxLQUFLSixLQUFMLENBQVdLLFFBQVgsR0FBc0IsT0FBdEIsR0FBZ0MsT0FBaEg7QUFDQSxVQUFJVSxPQUFPLElBQVg7O0FBRUE7QUFDQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xILGFBQUtBLEdBREE7QUFFTEksY0FBTVYsUUFGRDtBQUdMVyxnQkFBUSxNQUhIO0FBSUxDLGlCQUFTTCxJQUpKO0FBS0xNLGlCQUFTLGlCQUFVQyxNQUFWLEVBQW1CO0FBQzFCO0FBQ0EsZUFBS0MsUUFBTCxDQUFjO0FBQ1ZwQix1QkFBVyxLQUREO0FBRVZDLHdCQUFZLEtBRkY7QUFHVkMsc0JBQVU7QUFIQSxXQUFkO0FBS0QsU0FaSTs7QUFjTG1CLGVBQU8sZUFBU0MsR0FBVCxFQUFjO0FBQ25CLGNBQUlBLElBQUlDLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUN0QjtBQUNBLGlCQUFLSCxRQUFMLENBQWM7QUFDWnBCLHlCQUFXLEtBREM7QUFFWkMsMEJBQVksSUFGQTtBQUdaQyx3QkFBVTtBQUhFLGFBQWQ7QUFLRDtBQUNGO0FBdkJJLE9BQVA7QUF5QkQ7Ozs2QkFHUTtBQUNQO0FBQ0EsVUFBSXNCLGFBQUo7O0FBRUEsVUFBSSxLQUFLM0IsS0FBTCxDQUFXRyxTQUFmLEVBQTBCO0FBQ3hCd0IsZUFBTyxvQkFBQyxLQUFELElBQU8sY0FBYyxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQixHQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBSzdCLEtBQUwsQ0FBV0ksVUFBZixFQUEyQjtBQUNoQ3VCLGVBQU8sb0JBQUMsTUFBRCxJQUFRLGNBQWMsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdEIsR0FBUDtBQUNELE9BRk0sTUFFQSxJQUFJLEtBQUs3QixLQUFMLENBQVdLLFFBQWYsRUFBeUI7QUFDOUJzQixlQUFPLG9CQUFDLE1BQUQsSUFBUSxjQUFjLEtBQUtDLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXRCLEdBQVA7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQTtBQUNHRjtBQURILE9BREY7QUFLRDs7OztFQWpFZUcsTUFBTUMsUzs7QUF3RXhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJ2QixTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6IG51bGwsXG4gICAgICBwYXNzd2Q6IG51bGwsXG4gICAgICBsb2dpblZpZXc6IHRydWUsXG4gICAgICBzaWdudXBWaWV3OiBmYWxzZSxcbiAgICAgIGluZm9WaWV3OiBmYWxzZVxuICAgIH1cbiAgfVxuXG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlcmRhdGEgPSB7ZW1haWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlLCBwYXNzd29yZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZCcpLnZhbHVlfVxuICAgIHZhciB1cmwgPSB0aGlzLnN0YXRlLmxvZ2luVmlldyA/ICcvbG9naW4nIDogdGhpcy5zdGF0ZS5zaWdudXBWaWV3ID8gJy9zaWdudXAnIDogdGhpcy5zdGF0ZS5pbmZvVmlldyA/ICcvaW5mbycgOiAnL2hvbWUnXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVidWdnZXJcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiB1c2VyZGF0YSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgY29udGV4dDogc2VsZixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXN1bHQgKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvZ2luVmlldzogZmFsc2UsXG4gICAgICAgICAgICBzaWdudXBWaWV3OiBmYWxzZSxcbiAgICAgICAgICAgIGluZm9WaWV3OiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgIH0sXG5cbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9naW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICAgIHNpZ251cFZpZXc6IHRydWUsXG4gICAgICAgICAgICBpbmZvVmlldzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBkZWJ1Z2dlclxuICAgIGxldCBwYWdlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUubG9naW5WaWV3KSB7XG4gICAgICBwYWdlID0gPExvZ2luIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gLz5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2lnbnVwVmlldykge1xuICAgICAgcGFnZSA9IDxTaWdudXAgaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfS8+XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmluZm9WaWV3KSB7XG4gICAgICBwYWdlID0gPFNpZ251cCBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9Lz5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3BhZ2V9XG4gICAgICA8L2Rpdj4pXG5cbiAgfVxufVxuXG5cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl19