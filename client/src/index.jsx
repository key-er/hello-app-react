class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      passwd: null
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    var data = {email: document.getElementById('email').value, password: document.getElementById('pwd').value}
    $.post('/login', data, function(err, resp) {
    })

  }


  render() {
    return (
      <div>

        <form id="login" onSubmit={this.handleSubmit.bind(this)}>
          <input type="email" id="email" placeholder="email" name="email" />
          <input type="password" id="pwd" placeholder="password"  name="passwd" />
          <input type="submit" value="Login" />
        </form>

      </div>)

  }
}





ReactDOM.render(<App />, document.getElementById('app'))