class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      passwd: null,
      loginView: true,
      signupView: false,
      infoView: false
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    var userdata = {email: document.getElementById('email').value, password: document.getElementById('pwd').value}
    var url = this.state.loginView ? '/login' : this.state.signupView ? '/signup' : this.state.infoView ? '/info' : '/home'
    var self = this;

    debugger
    $.ajax({
      url: url,
      data: userdata,
      method: 'POST',
      context: self,
      success: function( result ) {
        debugger;
        this.setState({
            loginView: false,
            signupView: false,
            infoView: true
          })
      },

      error: function(err) {
        if (err.status === 403) {
          debugger;
          this.setState({
            loginView: false,
            signupView: true,
            infoView: false
          })
        }
      }
    });
  }


  render() {
    debugger
    let page;

    if (this.state.loginView) {
      page = <Login handleSubmit={this.handleSubmit.bind(this)} />
    } else if (this.state.signupView) {
      page = <Signup handleSubmit={this.handleSubmit.bind(this)}/>
    } else if (this.state.infoView) {
      page = <Signup handleSubmit={this.handleSubmit.bind(this)}/>
    }

    return (
      <div>
        {page}
      </div>)

  }
}





ReactDOM.render(<App />, document.getElementById('app'))