import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OrdenListHook from './components/OrdenListHook'
import ActualizarOrden from "./components/ActualizarOrden";


function App() {
  return (
    <Router>
        <div>
			<div className="container-fluid">
			<div className="row">
				<div className="col-3 side-bar">
				<h2>IBM</h2>
				<nav className="nav flex-column">
					<div className="collpase navbar-collapse">
						<ul className="navbar-nav mr-auto">
							<li className="navbar-item">
								<Link to="/" className="nav-link">Lista</Link>
							</li>
							<li className="navbar-item">
								<Link to="/actualizar" className="nav-link">Actualizar</Link>
							</li>
						</ul>
					</div>
				</nav>
				</div>
				<div className="col-9">
					<Route exact path='/' component={OrdenListHook} />
					<Route exact path='/actualizar' component={ActualizarOrden} />
				</div>
			</div>
			

				
			</div>
		</div>
    </Router>
  );
}

export default App;
