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
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      // event.preventDefault();
      // var userdata = {email: document.getElementById('email').value, password: document.getElementById('pwd').value}
      // var url = this.state.loginView ? '/login' : this.state.signupView ? '/signup' : this.state.infoView ? '/info' : '/home'
      // var self = this;

      // debugger
      // $.ajax({
      //   url: url,
      //   data: userdata,
      //   method: 'POST',
      //   context: self,
      //   success: function( result ) {
      //     debugger;
      //     this.setState({
      //         loginView: false,
      //         signupView: false,
      //         infoView: true
      //       })
      //   },

      //   error: function(err) {
      //     debugger;
      //     if (err.status === 403) {
      //       debugger;
      //       this.setState({
      //         loginView: false,
      //         signupView: true,
      //         infoView: false
      //       })
      //     }
      //   }
      // });
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dkIiwibG9nZ2VkSW4iLCJob21lVmlldyIsImxvZ2luVmlldyIsInNpZ251cFZpZXciLCJpbmZvVmlldyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibXNnIiwicHJldmVudERlZmF1bHQiLCJ1c2VyZGF0YSIsImVtYWlsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicGFzc3dvcmQiLCJzZWxmIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiY29udGV4dCIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJyZW5kZXJJbmZvIiwiZXJyb3IiLCJlcnIiLCJzdGF0dXMiLCJyZW5kZXJSZWdpc3RlciIsInBhZ2UiLCJyZW5kZXJMb2dpbiIsImJpbmQiLCJoYW5kbGVMb2dpbiIsImhhbmRsZVJlZ2lzdGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGNBQVEsSUFGRztBQUdYQyxnQkFBVSxLQUhDOztBQUtYQyxnQkFBVSxJQUxDO0FBTVhDLGlCQUFXLEtBTkE7QUFPWEMsa0JBQVksS0FQRDtBQVFYQyxnQkFBVTtBQVJDLEtBQWI7QUFGaUI7QUFZbEI7Ozs7aUNBR1lDLEssRUFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7a0NBTWE7QUFDWkMsY0FBUUMsR0FBUixDQUFZLFdBQVo7QUFDQSxVQUFJLEtBQUtWLEtBQUwsQ0FBV0csUUFBZixFQUF5QjtBQUN2QixhQUFLUSxRQUFMLENBQWM7QUFDWkosb0JBQVUsSUFERTtBQUVaSCxvQkFBVSxLQUZFO0FBR1pDLHFCQUFXLEtBSEM7QUFJWkMsc0JBQVk7QUFKQSxTQUFkO0FBTUQsT0FQRCxNQU9PLElBQUksQ0FBQyxLQUFLTixLQUFMLENBQVdHLFFBQWhCLEVBQTBCO0FBQzdCLGFBQUtRLFFBQUwsQ0FBYztBQUNaSixvQkFBVSxLQURFO0FBRVpILG9CQUFVLEtBRkU7QUFHWkMscUJBQVcsSUFIQztBQUlaQyxzQkFBWTtBQUpBLFNBQWQ7QUFNSDtBQUNGOzs7bUNBRWM7QUFDYkcsY0FBUUMsR0FBUixDQUFZLFlBQVo7QUFDRDs7O21DQUVjRSxHLEVBQUs7QUFDbEJILGNBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQ1JKLGtCQUFVLEtBREY7QUFFUkgsa0JBQVUsS0FGRjtBQUdSQyxtQkFBVyxLQUhIO0FBSVJDLG9CQUFZO0FBSkosT0FBZDtBQU1BLFVBQUlNLEdBQUosRUFBU0gsUUFBUUMsR0FBUixDQUFZRSxHQUFaO0FBQ1Y7OztpQ0FHVTtBQUNYSCxjQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNaSixrQkFBVSxJQURFO0FBRVpILGtCQUFVLEtBRkU7QUFHWkMsbUJBQVcsS0FIQztBQUlaQyxvQkFBWTtBQUpBLE9BQWQ7QUFNRDs7O2dDQUdXRSxLLEVBQU87QUFDZkEsWUFBTUssY0FBTjtBQUNBLFVBQUlDLFdBQVcsRUFBQ0MsT0FBT0MsU0FBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsS0FBekMsRUFBZ0RDLFVBQVVILFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLEtBQXpGLEVBQWY7QUFDQSxVQUFJRSxPQUFPLElBQVg7O0FBRUFDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLFFBREE7QUFFTEMsY0FBTVYsUUFGRDtBQUdMVyxnQkFBUSxNQUhIO0FBSUxDLGlCQUFTTixJQUpKO0FBS0xPLGlCQUFTLGlCQUFVQyxNQUFWLEVBQW1CO0FBQzFCUixlQUFLUyxVQUFMO0FBQ0QsU0FQSTtBQVFMQyxlQUFPLGVBQVNDLEdBQVQsRUFBYztBQUNuQixjQUFJQSxJQUFJQyxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEJaLGlCQUFLYSxjQUFMLENBQW9CLDRCQUFwQjtBQUNELFdBRkQsTUFFTztBQUNQYixpQkFBS2EsY0FBTCxDQUFvQkYsR0FBcEI7QUFDRDtBQUNGO0FBZE0sT0FBUDtBQWdCSDs7O21DQUVjdkIsSyxFQUFPO0FBQ2xCQSxZQUFNSyxjQUFOO0FBQ0EsVUFBSUMsV0FBVyxFQUFDQyxPQUFPQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUF6QyxFQUFnREMsVUFBVUgsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixFQUErQkMsS0FBekYsRUFBZjtBQUNBLFVBQUlFLE9BQU8sSUFBWDs7QUFFQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssU0FEQTtBQUVMQyxjQUFNVixRQUZEO0FBR0xXLGdCQUFRLE1BSEg7QUFJTEMsaUJBQVNOLElBSko7QUFLTE8saUJBQVMsaUJBQVVDLE1BQVYsRUFBbUI7QUFDMUJSLGVBQUtTLFVBQUw7QUFDRCxTQVBJOztBQVNMQyxlQUFPLGVBQVNDLEdBQVQsRUFBYztBQUNuQixjQUFJQSxJQUFJQyxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEJaLGlCQUFLYSxjQUFMLENBQW9CLHNDQUFwQjtBQUNELFdBRkQsTUFFTztBQUNQYixpQkFBS2EsY0FBTCxDQUFvQkYsR0FBcEI7QUFDRDtBQUNGO0FBZk0sT0FBUDtBQWtCSDs7OzZCQUVVO0FBQ1AsVUFBSUcsYUFBSjs7QUFFQSxVQUFJLEtBQUtsQyxLQUFMLENBQVdJLFFBQWYsRUFBeUI7QUFDdkI4QixlQUFPLG9CQUFDLElBQUQsSUFBTSxhQUFhLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5CLEVBQWdELGdCQUFnQixLQUFLSCxjQUFMLENBQW9CRyxJQUFwQixDQUF5QixJQUF6QixDQUFoRSxHQUFQO0FBQ0Q7QUFDRCxVQUFJLEtBQUtwQyxLQUFMLENBQVdLLFNBQWYsRUFBMEI7QUFDeEI2QixlQUFPLG9CQUFDLEtBQUQsSUFBTyxPQUFPLEtBQUtHLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQWQsR0FBUDtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUtwQyxLQUFMLENBQVdNLFVBQWYsRUFBMkI7QUFDaEM0QixlQUFPLG9CQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtJLGNBQUwsQ0FBb0JGLElBQXBCLENBQXlCLElBQXpCLENBQWhCLEdBQVA7QUFDRCxPQUZNLE1BRUEsSUFBSSxLQUFLcEMsS0FBTCxDQUFXTyxRQUFmLEVBQXlCO0FBQzlCMkIsZUFBTyxvQkFBQyxJQUFELE9BQVA7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQTtBQUNHQTtBQURILE9BREY7QUFLRDs7OztFQXhLZUssTUFBTUMsUzs7QUErS3hCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUIxQixTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6IG51bGwsXG4gICAgICBwYXNzd2Q6IG51bGwsXG4gICAgICBsb2dnZWRJbjogZmFsc2UsXG5cbiAgICAgIGhvbWVWaWV3OiB0cnVlLFxuICAgICAgbG9naW5WaWV3OiBmYWxzZSxcbiAgICAgIHNpZ251cFZpZXc6IGZhbHNlLFxuICAgICAgaW5mb1ZpZXc6IGZhbHNlXG4gICAgfVxuICB9XG5cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHZhciB1c2VyZGF0YSA9IHtlbWFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWUsIHBhc3N3b3JkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkJykudmFsdWV9XG4gICAgLy8gdmFyIHVybCA9IHRoaXMuc3RhdGUubG9naW5WaWV3ID8gJy9sb2dpbicgOiB0aGlzLnN0YXRlLnNpZ251cFZpZXcgPyAnL3NpZ251cCcgOiB0aGlzLnN0YXRlLmluZm9WaWV3ID8gJy9pbmZvJyA6ICcvaG9tZSdcbiAgICAvLyB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBkZWJ1Z2dlclxuICAgIC8vICQuYWpheCh7XG4gICAgLy8gICB1cmw6IHVybCxcbiAgICAvLyAgIGRhdGE6IHVzZXJkYXRhLFxuICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICBjb250ZXh0OiBzZWxmLFxuICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24oIHJlc3VsdCApIHtcbiAgICAvLyAgICAgZGVidWdnZXI7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgbG9naW5WaWV3OiBmYWxzZSxcbiAgICAvLyAgICAgICAgIHNpZ251cFZpZXc6IGZhbHNlLFxuICAgIC8vICAgICAgICAgaW5mb1ZpZXc6IHRydWVcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgfSxcblxuICAgIC8vICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgIC8vICAgICBkZWJ1Z2dlcjtcbiAgICAvLyAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMykge1xuICAgIC8vICAgICAgIGRlYnVnZ2VyO1xuICAgIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgbG9naW5WaWV3OiBmYWxzZSxcbiAgICAvLyAgICAgICAgIHNpZ251cFZpZXc6IHRydWUsXG4gICAgLy8gICAgICAgICBpbmZvVmlldzogZmFsc2VcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gIH1cblxuXG5cblxuXG4gIHJlbmRlckxvZ2luKCkge1xuICAgIGNvbnNvbGUubG9nKCdsb2dnZWQgaW4nKVxuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5mb1ZpZXc6IHRydWUsXG4gICAgICAgIGhvbWVWaWV3OiBmYWxzZSxcbiAgICAgICAgbG9naW5WaWV3OiBmYWxzZSxcbiAgICAgICAgc2lnbnVwVmlldzogZmFsc2UsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUubG9nZ2VkSW4pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5mb1ZpZXc6IGZhbHNlLFxuICAgICAgICAgIGhvbWVWaWV3OiBmYWxzZSxcbiAgICAgICAgICBsb2dpblZpZXc6IHRydWUsXG4gICAgICAgICAgc2lnbnVwVmlldzogZmFsc2UsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckxvZ291dCgpIHtcbiAgICBjb25zb2xlLmxvZygnbG9nZ2VkIG91dCcpXG4gIH1cblxuICByZW5kZXJSZWdpc3Rlcihtc2cpIHtcbiAgICBjb25zb2xlLmxvZygncmVnaXN0ZXInKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGluZm9WaWV3OiBmYWxzZSxcbiAgICAgICAgICBob21lVmlldzogZmFsc2UsXG4gICAgICAgICAgbG9naW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICBzaWdudXBWaWV3OiB0cnVlLFxuICAgIH0pXG4gICAgaWYgKG1zZykgY29uc29sZS5sb2cobXNnKVxuICB9XG5cblxucmVuZGVySW5mbygpIHtcbiAgY29uc29sZS5sb2coJ3JlZ2lzdGVyJylcbiAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgaW5mb1ZpZXc6IHRydWUsXG4gICAgaG9tZVZpZXc6IGZhbHNlLFxuICAgIGxvZ2luVmlldzogZmFsc2UsXG4gICAgc2lnbnVwVmlldzogZmFsc2UsXG4gIH0pXG59XG5cblxuaGFuZGxlTG9naW4oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHVzZXJkYXRhID0ge2VtYWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZSwgcGFzc3dvcmQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2QnKS52YWx1ZX1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgIGRhdGE6IHVzZXJkYXRhLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBjb250ZXh0OiBzZWxmLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oIHJlc3VsdCApIHtcbiAgICAgICAgc2VsZi5yZW5kZXJJbmZvKClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICBzZWxmLnJlbmRlclJlZ2lzdGVyKCdlbWFpbC9wYXNzd2QgZGlkIG5vdCBtYXRjaCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYucmVuZGVyUmVnaXN0ZXIoZXJyKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuaGFuZGxlUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHVzZXJkYXRhID0ge2VtYWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZSwgcGFzc3dvcmQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2QnKS52YWx1ZX1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3NpZ251cCcsXG4gICAgICBkYXRhOiB1c2VyZGF0YSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgY29udGV4dDogc2VsZixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXN1bHQgKSB7XG4gICAgICAgIHNlbGYucmVuZGVySW5mbygpXG4gICAgICB9LFxuXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICBzZWxmLnJlbmRlclJlZ2lzdGVyKCdlbWFpbCBhbHJlYWR5IGV4aXN0cywgdHJ5ICBkaWZmZXJlbnQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnJlbmRlclJlZ2lzdGVyKGVycilcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbn1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBhZ2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5ob21lVmlldykge1xuICAgICAgcGFnZSA9IDxIb21lIHJlbmRlckxvZ2luPXt0aGlzLnJlbmRlckxvZ2luLmJpbmQodGhpcyl9IHJlbmRlclJlZ2lzdGVyPXt0aGlzLnJlbmRlclJlZ2lzdGVyLmJpbmQodGhpcyl9Lz5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUubG9naW5WaWV3KSB7XG4gICAgICBwYWdlID0gPExvZ2luIGxvZ2luPXt0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcyl9Lz5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2lnbnVwVmlldykge1xuICAgICAgcGFnZSA9IDxTaWdudXAgc2lnbnVwPXt0aGlzLmhhbmRsZVJlZ2lzdGVyLmJpbmQodGhpcyl9Lz5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaW5mb1ZpZXcpIHtcbiAgICAgIHBhZ2UgPSA8SW5mbyAvPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7cGFnZX1cbiAgICAgIDwvZGl2PilcblxuICB9XG59XG5cblxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkiXX0=