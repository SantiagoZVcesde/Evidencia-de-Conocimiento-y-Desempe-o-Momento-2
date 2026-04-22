import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Philosophy = () => {
  return (
    <>
      <Navbar />
      <main className="main-content philosophy-layout">
        <h1 className="title-large">Menos es más</h1>
        <div className="text-block">
          <p className="subtitle">Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales. Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa.</p>
          <br></br>
          <p className="subtitle">En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre la intervención humana y la expresión salvaje de la naturaleza.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Philosophy;