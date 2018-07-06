"use strict";

function Login(props) {
  return React.createElement(
    "form",
    { id: "login", onSubmit: props.login },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwibG9naW4iLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BCLFNBRUU7QUFBQTtBQUFBLE1BQU0sSUFBRyxPQUFULEVBQWlCLFVBQVVBLE1BQU1DLEtBQWpDO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUUsbUNBQU8sTUFBSyxPQUFaLEVBQW9CLElBQUcsT0FBdkIsRUFBK0IsYUFBWSxPQUEzQyxFQUFtRCxNQUFLLE9BQXhELEdBRkY7QUFHRSxtQ0FBTyxNQUFLLFVBQVosRUFBdUIsSUFBRyxLQUExQixFQUFnQyxhQUFZLFVBQTVDLEVBQXdELE1BQUssUUFBN0QsR0FIRjtBQUlFLG1DQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLE9BQTNCO0FBSkYsR0FGRjtBQVNEOztBQUVEQyxPQUFPSCxLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICByZXR1cm4gKFxuXG4gICAgPGZvcm0gaWQ9XCJsb2dpblwiIG9uU3VibWl0PXtwcm9wcy5sb2dpbn0+XG4gICAgICA8aDI+IFBsZWFzZSBsb2dpbiB0byBwcm9jZWVkIDwvaDI+XG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicHdkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiICBuYW1lPVwicGFzc3dkXCIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIC8+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbndpbmRvdy5Mb2dpbiA9IExvZ2luIl19