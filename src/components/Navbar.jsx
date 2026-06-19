import { NavLink } from 'react-router-dom';
import data from '../data.json';
import './Navbar.css';

export default function Navbar() {
  const { navbar } = data;

  return (
    <nav className="navbar">
      <div className="nav-logo">{navbar.logo}</div>

      <div className="nav-links">
        {navbar.links.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
