import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">Zenith Bonsai</NavLink>
      <div className="nav-links">
        <NavLink 
          to="/philosophy" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Filosofía
        </NavLink>
        <NavLink 
          to="/gallery" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Galería
        </NavLink>
        <NavLink 
          to="/booking" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Reservas
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;