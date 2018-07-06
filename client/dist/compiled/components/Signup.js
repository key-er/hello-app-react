"use strict";

function Signup(props) {
  return React.createElement(
    "form",
    { id: "login", onSubmit: props.handleSubmit },
    React.createElement(
      "h2",
      null,
      " Not have an accout? Register Now! "
    ),
    React.createElement("input", { type: "email", id: "email", placeholder: "email", name: "email" }),
    React.createElement("input", { type: "password", id: "pwd", placeholder: "password", name: "passwd" }),
    React.createElement("input", { type: "submit", value: "Signup" })
  );
}

window.Signup = Signup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NpZ251cC5qc3giXSwibmFtZXMiOlsiU2lnbnVwIiwicHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQ0EsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDdEIsU0FDRztBQUFBO0FBQUEsTUFBTSxJQUFHLE9BQVQsRUFBaUIsVUFBVUEsTUFBTUMsWUFBakM7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRSxtQ0FBTyxNQUFLLE9BQVosRUFBb0IsSUFBRyxPQUF2QixFQUErQixhQUFZLE9BQTNDLEVBQW1ELE1BQUssT0FBeEQsR0FGRjtBQUdFLG1DQUFPLE1BQUssVUFBWixFQUF1QixJQUFHLEtBQTFCLEVBQWdDLGFBQVksVUFBNUMsRUFBd0QsTUFBSyxRQUE3RCxHQUhGO0FBSUUsbUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFKRixHQURIO0FBUUE7O0FBSURDLE9BQU9ILE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6IlNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gU2lnbnVwKHByb3BzKSB7XG4gcmV0dXJuIChcbiAgICA8Zm9ybSBpZD1cImxvZ2luXCIgb25TdWJtaXQ9e3Byb3BzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICA8aDI+IE5vdCBoYXZlIGFuIGFjY291dD8gUmVnaXN0ZXIgTm93ISA8L2gyPlxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInB3ZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiAgbmFtZT1cInBhc3N3ZFwiIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2lnbnVwXCIgLz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuXG5cbndpbmRvdy5TaWdudXAgPSBTaWdudXA7Il19