
function Signup(props) {
 return (
    <form id="login" onSubmit={props.handleSubmit}>
      <h2> Not have an accout? Register Now! </h2>
      <input type="email" id="email" placeholder="email" name="email" />
      <input type="password" id="pwd" placeholder="password"  name="passwd" />
      <input type="submit" value="Signup" />
    </form>
  )
}



window.Signup = Signup;