class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      passwd: null,
      loggedIn: false,

      homeView: true,
      loginView: false,
      signupView: false,
      infoView: false
    }
  }


  renderLogin() {
    console.log('logged in')
    if (this.state.loggedIn) {
      this.setState({
        infoView: true,
        homeView: false,
        loginView: false,
        signupView: false,
      })
    } else if (!this.state.loggedIn) {
        this.setState({
          infoView: false,
          homeView: false,
          loginView: true,
          signupView: false,
      })
    }
  }

  renderLogout() {
    console.log('logged out')
  }

  renderRegister(msg) {
    console.log('register')
    this.setState({
          infoView: false,
          homeView: false,
          loginView: false,
          signupView: true,
    })
    if (msg) console.log(msg)
  }


renderInfo() {
  console.log('register')
  this.setState({
    infoView: true,
    homeView: false,
    loginView: false,
    signupView: false,
  })
}


handleLogin(event) {
    event.preventDefault()
    var userdata = {email: document.getElementById('email').value, password: document.getElementById('pwd').value}
    var self = this;

    $.ajax({
      url: '/login',
      data: userdata,
      method: 'POST',
      context: self,
      success: function( result ) {
        self.renderInfo()
      },
      error: function(err) {
        if (err.status === 404) {
          self.renderRegister('email/passwd did not match')
        } else {
        self.renderRegister(err)
      }
    }
  })
}

handleRegister(event) {
    event.preventDefault()
    var userdata = {email: document.getElementById('email').value, password: document.getElementById('pwd').value}
    var self = this;

    $.ajax({
      url: '/signup',
      data: userdata,
      method: 'POST',
      context: self,
      success: function( result ) {
        self.renderInfo()
      },

      error: function(err) {
        if (err.status === 403) {
          self.renderRegister('email already exists, try  different')
        } else {
        self.renderRegister(err)
      }
    }
  })

}

  render() {
    let page;

    if (this.state.homeView) {
      page = <Home renderLogin={this.renderLogin.bind(this)} renderRegister={this.renderRegister.bind(this)}/>
    }
    if (this.state.loginView) {
      page = <Login login={this.handleLogin.bind(this)}/>
    } else if (this.state.signupView) {
      page = <Signup signup={this.handleRegister.bind(this)}/>
    } else if (this.state.infoView) {
      page = <Info />
    }

    return (
      <div>
        {page}

      </div>)

  }
}





ReactDOM.render(<App />, document.getElementById('app'))