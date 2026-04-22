import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Philosophy = () => {
  return (
    <>
      <Navbar />
      <main className="content-section">
        <div className="text-container">
          <h1>Menos es más</h1>
          <p>Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales...</p>
          <p>Buscamos el equilibrio perfecto entre la intervención humana y la expresión salvaje.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Philosophy;