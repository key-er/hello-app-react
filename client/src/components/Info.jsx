const HashRouter = window.ReactRouterDOM.HashRouter
const Route = window.ReactRouterDOM.Route
const NavLink = window.ReactRouterDOM.NavLink
const Stuff = function () {return <div> This is Stuff </div>}
const Contact = function () {return <div> This is Contact </div>}


function Info(props) {
  return (
    <div>
      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        <h2> Info Page </h2>
      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      <HashRouter>
        <div>
          <ul className = "header">
            <li> <NavLink to='/'> Home </NavLink></li>
            <li> <NavLink to='/stuff'> Stuff </NavLink></li>
            <li> <NavLink to='/contact'> Contact </NavLink></li>
          </ul>

          <div className="content">
            <Route exact path='/' component={Home}/>
            <Route exact path='/stuff' component={Stuff} />
            <Route exact path='/contact' component={Contact}/>

          </div>
        </div>
      </HashRouter>

    </div>
    )
}
window.Info = Info;