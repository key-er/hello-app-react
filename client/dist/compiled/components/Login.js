"use strict";

function Login(props) {
  return React.createElement(
    "form",
    { id: "login", onSubmit: props.handleSubmit },
    React.createElement(
      "h2",
      null,
      " Please login to proceed "
    ),
    React.createElement("input", { type: "email", id: "email", placeholder: "email", name: "email" }),
    React.createElement("input", { type: "password", id: "pwd", placeholder: "password", name: "passwd" }),
    React.createElement("input", { type: "submit", value: "Login" })
  );
}

window.Login = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiaGFuZGxlU3VibWl0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixTQUVFO0FBQUE7QUFBQSxNQUFNLElBQUcsT0FBVCxFQUFpQixVQUFVQSxNQUFNQyxZQUFqQztBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFLG1DQUFPLE1BQUssT0FBWixFQUFvQixJQUFHLE9BQXZCLEVBQStCLGFBQVksT0FBM0MsRUFBbUQsTUFBSyxPQUF4RCxHQUZGO0FBR0UsbUNBQU8sTUFBSyxVQUFaLEVBQXVCLElBQUcsS0FBMUIsRUFBZ0MsYUFBWSxVQUE1QyxFQUF3RCxNQUFLLFFBQTdELEdBSEY7QUFJRSxtQ0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxPQUEzQjtBQUpGLEdBRkY7QUFTRDs7QUFFREMsT0FBT0gsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6IkxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgcmV0dXJuIChcblxuICAgIDxmb3JtIGlkPVwibG9naW5cIiBvblN1Ym1pdD17cHJvcHMuaGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMj4gUGxlYXNlIGxvZ2luIHRvIHByb2NlZWQgPC9oMj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwd2RcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgIG5hbWU9XCJwYXNzd2RcIiAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgLz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxud2luZG93LkxvZ2luID0gTG9naW4iXX0=