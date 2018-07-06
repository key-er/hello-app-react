function Home(props) {
  return (
    <div>
      <input type="submit" value="Login" onClick={props.renderLogin}/>
      <input type="submit" value="Register" onClick={props.renderRegister}/>
    </div>
  )
}

window.Home = Home;