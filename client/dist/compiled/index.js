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
      loggedIn: false,

      homeView: true,
      loginView: false,
      signupView: false,
      infoView: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'renderLogin',
    value: function renderLogin() {
      console.log('logged in');
      if (this.state.loggedIn) {
        this.setState({
          infoView: true,
          homeView: false,
          loginView: false,
          signupView: false
        });
      } else if (!this.state.loggedIn) {
        this.setState({
          infoView: false,
          homeView: false,
          loginView: true,
          signupView: false
        });
      }
    }
  }, {
    key: 'renderLogout',
    value: function renderLogout() {
      console.log('logged out');
    }
  }, {
    key: 'renderRegister',
    value: function renderRegister(msg) {
      console.log('register');
      this.setState({
        infoView: false,
        homeView: false,
        loginView: false,
        signupView: true
      });
      if (msg) console.log(msg);
    }
  }, {
    key: 'renderInfo',
    value: function renderInfo() {
      console.log('register');
      this.setState({
        infoView: true,
        homeView: false,
        loginView: false,
        signupView: false
      });
    }
  }, {
    key: 'handleLogin',
    value: function handleLogin(event) {
      event.preventDefault();
      var userdata = { email: document.getElementById('email').value, password: document.getElementById('pwd').value };
      var self = this;

      $.ajax({
        url: '/login',
        data: userdata,
        method: 'POST',
        context: self,
        success: function success(result) {
          self.renderInfo();
        },
        error: function error(err) {
          if (err.status === 404) {
            self.renderRegister('email/passwd did not match');
          } else {
            self.renderRegister(err);
          }
        }
      });
    }
  }, {
    key: 'handleRegister',
    value: function handleRegister(event) {
      event.preventDefault();
      var userdata = { email: document.getElementById('email').value, password: document.getElementById('pwd').value };
      var self = this;

      $.ajax({
        url: '/signup',
        data: userdata,
        method: 'POST',
        context: self,
        success: function success(result) {
          self.renderInfo();
        },

        error: function error(err) {
          if (err.status === 403) {
            self.renderRegister('email already exists, try  different');
          } else {
            self.renderRegister(err);
          }
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = void 0;

      if (this.state.homeView) {
        page = React.createElement(Home, { renderLogin: this.renderLogin.bind(this), renderRegister: this.renderRegister.bind(this) });
      }
      if (this.state.loginView) {
        page = React.createElement(Login, { login: this.handleLogin.bind(this) });
      } else if (this.state.signupView) {
        page = React.createElement(Signup, { signup: this.handleRegister.bind(this) });
      } else if (this.state.infoView) {
        page = React.createElement(Info, null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dkIiwibG9nZ2VkSW4iLCJob21lVmlldyIsImxvZ2luVmlldyIsInNpZ251cFZpZXciLCJpbmZvVmlldyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyZGF0YSIsImVtYWlsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicGFzc3dvcmQiLCJzZWxmIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiY29udGV4dCIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJyZW5kZXJJbmZvIiwiZXJyb3IiLCJlcnIiLCJzdGF0dXMiLCJyZW5kZXJSZWdpc3RlciIsInBhZ2UiLCJyZW5kZXJMb2dpbiIsImJpbmQiLCJoYW5kbGVMb2dpbiIsImhhbmRsZVJlZ2lzdGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGNBQVEsSUFGRztBQUdYQyxnQkFBVSxLQUhDOztBQUtYQyxnQkFBVSxJQUxDO0FBTVhDLGlCQUFXLEtBTkE7QUFPWEMsa0JBQVksS0FQRDtBQVFYQyxnQkFBVTtBQVJDLEtBQWI7QUFGaUI7QUFZbEI7Ozs7a0NBR2E7QUFDWkMsY0FBUUMsR0FBUixDQUFZLFdBQVo7QUFDQSxVQUFJLEtBQUtULEtBQUwsQ0FBV0csUUFBZixFQUF5QjtBQUN2QixhQUFLTyxRQUFMLENBQWM7QUFDWkgsb0JBQVUsSUFERTtBQUVaSCxvQkFBVSxLQUZFO0FBR1pDLHFCQUFXLEtBSEM7QUFJWkMsc0JBQVk7QUFK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QUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQWQsR0FBUDtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUtwQyxLQUFMLENBQVdNLFVBQWYsRUFBMkI7QUFDaEM0QixlQUFPLG9CQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtJLGNBQUwsQ0FBb0JGLElBQXBCLENBQXlCLElBQXpCLENBQWhCLEdBQVA7QUFDRCxPQUZNLE1BRUEsSUFBSSxLQUFLcEMsS0FBTCxDQUFXTyxRQUFmLEVBQXlCO0FBQzlCMkIsZUFBTyxvQkFBQyxJQUFELE9BQVA7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQTtBQUNHQTtBQURILE9BREY7QUFNRDs7OztFQWxJZUssTUFBTUMsUzs7QUF5SXhCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUIxQixTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6IG51bGwsXG4gICAgICBwYXNzd2Q6IG51bGwsXG4gICAgICBsb2dnZWRJbjogZmFsc2UsXG5cbiAgICAgIGhvbWVWaWV3OiB0cnVlLFxuICAgICAgbG9naW5WaWV3OiBmYWxzZSxcbiAgICAgIHNpZ251cFZpZXc6IGZhbHNlLFxuICAgICAgaW5mb1ZpZXc6IGZhbHNlXG4gICAgfVxuICB9XG5cblxuICByZW5kZXJMb2dpbigpIHtcbiAgICBjb25zb2xlLmxvZygnbG9nZ2VkIGluJylcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dnZWRJbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGluZm9WaWV3OiB0cnVlLFxuICAgICAgICBob21lVmlldzogZmFsc2UsXG4gICAgICAgIGxvZ2luVmlldzogZmFsc2UsXG4gICAgICAgIHNpZ251cFZpZXc6IGZhbHNlLFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmxvZ2dlZEluKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGluZm9WaWV3OiBmYWxzZSxcbiAgICAgICAgICBob21lVmlldzogZmFsc2UsXG4gICAgICAgICAgbG9naW5WaWV3OiB0cnVlLFxuICAgICAgICAgIHNpZ251cFZpZXc6IGZhbHNlLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXJMb2dvdXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2xvZ2dlZCBvdXQnKVxuICB9XG5cbiAgcmVuZGVyUmVnaXN0ZXIobXNnKSB7XG4gICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyJylcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbmZvVmlldzogZmFsc2UsXG4gICAgICAgICAgaG9tZVZpZXc6IGZhbHNlLFxuICAgICAgICAgIGxvZ2luVmlldzogZmFsc2UsXG4gICAgICAgICAgc2lnbnVwVmlldzogdHJ1ZSxcbiAgICB9KVxuICAgIGlmIChtc2cpIGNvbnNvbGUubG9nKG1zZylcbiAgfVxuXG5cbnJlbmRlckluZm8oKSB7XG4gIGNvbnNvbGUubG9nKCdyZWdpc3RlcicpXG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIGluZm9WaWV3OiB0cnVlLFxuICAgIGhvbWVWaWV3OiBmYWxzZSxcbiAgICBsb2dpblZpZXc6IGZhbHNlLFxuICAgIHNpZ251cFZpZXc6IGZhbHNlLFxuICB9KVxufVxuXG5cbmhhbmRsZUxvZ2luKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHZhciB1c2VyZGF0YSA9IHtlbWFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWUsIHBhc3N3b3JkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkJykudmFsdWV9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9sb2dpbicsXG4gICAgICBkYXRhOiB1c2VyZGF0YSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgY29udGV4dDogc2VsZixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXN1bHQgKSB7XG4gICAgICAgIHNlbGYucmVuZGVySW5mbygpXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgc2VsZi5yZW5kZXJSZWdpc3RlcignZW1haWwvcGFzc3dkIGRpZCBub3QgbWF0Y2gnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnJlbmRlclJlZ2lzdGVyKGVycilcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmhhbmRsZVJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHZhciB1c2VyZGF0YSA9IHtlbWFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWUsIHBhc3N3b3JkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkJykudmFsdWV9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9zaWdudXAnLFxuICAgICAgZGF0YTogdXNlcmRhdGEsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGNvbnRleHQ6IHNlbGYsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiggcmVzdWx0ICkge1xuICAgICAgICBzZWxmLnJlbmRlckluZm8oKVxuICAgICAgfSxcblxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgc2VsZi5yZW5kZXJSZWdpc3RlcignZW1haWwgYWxyZWFkeSBleGlzdHMsIHRyeSAgZGlmZmVyZW50JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5yZW5kZXJSZWdpc3RlcihlcnIpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG59XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwYWdlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaG9tZVZpZXcpIHtcbiAgICAgIHBhZ2UgPSA8SG9tZSByZW5kZXJMb2dpbj17dGhpcy5yZW5kZXJMb2dpbi5iaW5kKHRoaXMpfSByZW5kZXJSZWdpc3Rlcj17dGhpcy5yZW5kZXJSZWdpc3Rlci5iaW5kKHRoaXMpfS8+XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2luVmlldykge1xuICAgICAgcGFnZSA9IDxMb2dpbiBsb2dpbj17dGhpcy5oYW5kbGVMb2dpbi5iaW5kKHRoaXMpfS8+XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNpZ251cFZpZXcpIHtcbiAgICAgIHBhZ2UgPSA8U2lnbnVwIHNpZ251cD17dGhpcy5oYW5kbGVSZWdpc3Rlci5iaW5kKHRoaXMpfS8+XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmluZm9WaWV3KSB7XG4gICAgICBwYWdlID0gPEluZm8gLz5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3BhZ2V9XG5cbiAgICAgIDwvZGl2PilcblxuICB9XG59XG5cblxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkiXX0=