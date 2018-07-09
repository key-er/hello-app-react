'use strict';

var HashRouter = window.ReactRouterDOM.HashRouter;
var Route = window.ReactRouterDOM.Route;
var NavLink = window.ReactRouterDOM.NavLink;
var Stuff = function Stuff() {
  return React.createElement(
    'div',
    null,
    ' This is Stuff '
  );
};
var Contact = function Contact() {
  return React.createElement(
    'div',
    null,
    ' This is Contact '
  );
};

function Info(props) {
  return React.createElement(
    'div',
    null,
    '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
    React.createElement(
      'h2',
      null,
      ' Info Page '
    ),
    '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
    React.createElement(
      HashRouter,
      null,
      React.createElement(
        'div',
        null,
        React.createElement(
          'ul',
          { className: 'header' },
          React.createElement(
            'li',
            null,
            ' ',
            React.createElement(
              NavLink,
              { to: '/' },
              ' Home '
            )
          ),
          React.createElement(
            'li',
            null,
            ' ',
            React.createElement(
              NavLink,
              { to: '/stuff' },
              ' Stuff '
            )
          ),
          React.createElement(
            'li',
            null,
            ' ',
            React.createElement(
              NavLink,
              { to: '/contact' },
              ' Contact '
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'content' },
          React.createElement(Route, { exact: true, path: '/', component: Home }),
          React.createElement(Route, { exact: true, path: '/stuff', component: Stuff }),
          React.createElement(Route, { exact: true, path: '/contact', component: Contact })
        )
      )
    )
  );
}
window.Info = Info;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0luZm8uanN4Il0sIm5hbWVzIjpbIkhhc2hSb3V0ZXIiLCJ3aW5kb3ciLCJSZWFjdFJvdXRlckRPTSIsIlJvdXRlIiwiTmF2TGluayIsIlN0dWZmIiwiQ29udGFjdCIsIkluZm8iLCJwcm9wcyIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsYUFBYUMsT0FBT0MsY0FBUCxDQUFzQkYsVUFBekM7QUFDQSxJQUFNRyxRQUFRRixPQUFPQyxjQUFQLENBQXNCQyxLQUFwQztBQUNBLElBQU1DLFVBQVVILE9BQU9DLGNBQVAsQ0FBc0JFLE9BQXRDO0FBQ0EsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLEdBQVk7QUFBQyxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUDtBQUFrQyxDQUE3RDtBQUNBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFZO0FBQUMsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVA7QUFBb0MsQ0FBakU7O0FBR0EsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRko7QUFBQTtBQUlFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVksUUFBaEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFLO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxJQUFHLEdBQVo7QUFBQTtBQUFBO0FBQUwsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUs7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLElBQUcsUUFBWjtBQUFBO0FBQUE7QUFBTCxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBSztBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsSUFBRyxVQUFaO0FBQUE7QUFBQTtBQUFMO0FBSEYsU0FERjtBQU9FO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZjtBQUNFLDhCQUFDLEtBQUQsSUFBTyxXQUFQLEVBQWEsTUFBSyxHQUFsQixFQUFzQixXQUFXQyxJQUFqQyxHQURGO0FBRUUsOEJBQUMsS0FBRCxJQUFPLFdBQVAsRUFBYSxNQUFLLFFBQWxCLEVBQTJCLFdBQVdKLEtBQXRDLEdBRkY7QUFHRSw4QkFBQyxLQUFELElBQU8sV0FBUCxFQUFhLE1BQUssVUFBbEIsRUFBNkIsV0FBV0MsT0FBeEM7QUFIRjtBQVBGO0FBREY7QUFKRixHQURGO0FBd0JEO0FBQ0RMLE9BQU9NLElBQVAsR0FBY0EsSUFBZCIsImZpbGUiOiJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSGFzaFJvdXRlciA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5IYXNoUm91dGVyXG5jb25zdCBSb3V0ZSA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5Sb3V0ZVxuY29uc3QgTmF2TGluayA9IHdpbmRvdy5SZWFjdFJvdXRlckRPTS5OYXZMaW5rXG5jb25zdCBTdHVmZiA9IGZ1bmN0aW9uICgpIHtyZXR1cm4gPGRpdj4gVGhpcyBpcyBTdHVmZiA8L2Rpdj59XG5jb25zdCBDb250YWN0ID0gZnVuY3Rpb24gKCkge3JldHVybiA8ZGl2PiBUaGlzIGlzIENvbnRhY3QgPC9kaXY+fVxuXG5cbmZ1bmN0aW9uIEluZm8ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xuICAgICAgICA8aDI+IEluZm8gUGFnZSA8L2gyPlxuICAgICAgKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xuICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZSA9IFwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8bGk+IDxOYXZMaW5rIHRvPScvJz4gSG9tZSA8L05hdkxpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT4gPE5hdkxpbmsgdG89Jy9zdHVmZic+IFN0dWZmIDwvTmF2TGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPiA8TmF2TGluayB0bz0nL2NvbnRhY3QnPiBDb250YWN0IDwvTmF2TGluaz48L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvc3R1ZmYnIGNvbXBvbmVudD17U3R1ZmZ9IC8+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nL2NvbnRhY3QnIGNvbXBvbmVudD17Q29udGFjdH0vPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9IYXNoUm91dGVyPlxuXG4gICAgPC9kaXY+XG4gICAgKVxufVxud2luZG93LkluZm8gPSBJbmZvOyJdfQ==