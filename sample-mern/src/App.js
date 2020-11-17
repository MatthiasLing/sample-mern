import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://www.youtube.com/watch?v=hh7Gu3MsGH8" target="_blank">
            <img src={logo} width="30" height="30" alt="placeholder" />
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/create">Create</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/all">See All</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick = {()=>{}}>Search</button>
            </form>
          </div>
        </nav>
      </div>


  );
}

export default App;
