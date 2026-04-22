import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <main className="main-content hero-layout">
      <div className="hero-content">
        <h1 className="title-large">El arte de la <br /> paciencia</h1>
        
        <p className="subtitle-hero">
          Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. 
          Un espacio para reconectar con la naturaleza.
        </p>
        <br></br>
        <Link className="btn-main" to="/booking">Reserva un taller</Link>
      </div>
    </main>
  );
};

export default Hero;