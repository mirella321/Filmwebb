import { NavLink } from "react-router-dom";
import { FaFilm, FaPlus, FaLeaf } from "react-icons/fa";
import "./nav.css";

export function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaLeaf className="logo-icon" />
        <span>GreenMovies</span>
      </div>

      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <FaFilm />
            <span>Filmy</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <FaPlus />
            <span>Dodaj film</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;