function Login(props) {
  return (

    <form id="login" onSubmit={props.handleSubmit}>
      <h2> Please login to proceed </h2>
      <input type="email" id="email" placeholder="email" name="email" />
      <input type="password" id="pwd" placeholder="password"  name="passwd" />
      <input type="submit" value="Login" />
    </form>
  )
}

window.Login = Login