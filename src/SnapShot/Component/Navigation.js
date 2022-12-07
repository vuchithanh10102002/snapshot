import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-bar my-12">
      <ul className="flex justify-center">
        <li>
          <NavLink to="/mountain">Mountain</NavLink>
        </li>
        <li>
          <NavLink to="/beach">Beachs</NavLink>
        </li>
        <li>
          <NavLink to="/bird">Birds</NavLink>
        </li>
        <li>
          <NavLink to="/food">Food</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
