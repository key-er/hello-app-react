"use strict";

function Login(props) {
  return React.createElement(
    "form",
    { id: "login", onSubmit: this.handleSubmit.bind(this) },
    React.createElement("input", { type: "email", id: "email", placeholder: "email", name: "email" }),
    React.createElement("input", { type: "password", id: "pwd", placeholder: "password", name: "passwd" }),
    React.createElement("input", { type: "submit", value: "Login" })
  );
}

window.Login = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDcEIsU0FDRTtBQUFBO0FBQUEsTUFBTSxJQUFHLE9BQVQsRUFBaUIsVUFBVSxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUEzQjtBQUNFLG1DQUFPLE1BQUssT0FBWixFQUFvQixJQUFHLE9BQXZCLEVBQStCLGFBQVksT0FBM0MsRUFBbUQsTUFBSyxPQUF4RCxHQURGO0FBRUUsbUNBQU8sTUFBSyxVQUFaLEVBQXVCLElBQUcsS0FBMUIsRUFBZ0MsYUFBWSxVQUE1QyxFQUF3RCxNQUFLLFFBQTdELEdBRkY7QUFHRSxtQ0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxPQUEzQjtBQUhGLEdBREY7QUFPRDs7QUFFREMsT0FBT0osS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6IkxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBpZD1cImxvZ2luXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInB3ZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiAgbmFtZT1cInBhc3N3ZFwiIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9naW5cIiAvPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG53aW5kb3cuTG9naW4gPSBMb2dpbiJdfQ==