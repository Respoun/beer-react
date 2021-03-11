import React from "react";
import Beers from './components/beers/beers';
import Login from './components/login/login';
import Details from './components/beers/details';
import Random from './components/beers/random';
import Privateroute from './components/routing/privateroute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/beers">Beers</Link>
            </li>
            <li>
              <Link to="/random">Find a random beer</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Privateroute path="/beers">
            <Beers/>
        </Privateroute>
        <Privateroute path="/details/:id">
            <Details/>
         </Privateroute>
         <Privateroute path="/random">
             <Random/>
          </Privateroute>
         <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
