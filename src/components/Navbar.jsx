import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    // Mantenemos el header con su clase para el fondo blanco
    <header className="navbar-container">
      <nav className="navbar">
        {/* Cambiamos 'a' por 'NavLink' y 'href' por 'to' */}
        <NavLink to="/" className="logo">ZENITH BONSAI</NavLink>
        
        <div className="nav-links">
          <NavLink to="/philosophy">Filosofía</NavLink>
          <NavLink to="/gallery">Galería</NavLink>
          <NavLink to="/booking">Reservas</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;