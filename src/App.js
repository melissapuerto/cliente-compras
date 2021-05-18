import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ComprasList from "./components/ComprasList"
import ActualizarCompra from "./components/ActualizarCompra"
import Mostrar from "./components/mostrar"


function App() {
  return (
    <Router>
      <div className="container" >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a><Link to="/" className="navbar-brand"> <FontAwesomeIcon icon={faGlobe} /> Sistema Administrador de Gastos Empresariales</Link></a>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav ml-auto">
            <li className="navbar-item"> 
                <Link to="/" className="nav-link"> Inicio               <FontAwesomeIcon icon={faHome} />
</Link>
              </li>
            <li className="navbar-item"> 
                <Link to="/mostrar" className="nav-link"> Altas/Bajas <FontAwesomeIcon icon={faPlus} />
</Link>
              </li>
              <li className="navbar-item">
                <Link to="/actualizar" className="nav-link">Actualizar Compra  <FontAwesomeIcon icon={faEdit} />
</Link>
              </li>
              
            </ul>
          </div>
        </nav>
        <br />
        <Route exact path="/mostrar" component={ComprasList} />
        <Route exact path="/actualizar" component={ActualizarCompra} />
        <Route exact path="/" component={Mostrar} />

      </div>
    </Router>
  );
}

export default App;
