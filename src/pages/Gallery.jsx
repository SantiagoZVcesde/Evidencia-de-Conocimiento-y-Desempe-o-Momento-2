import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  const misArboles = [
    "Arce Japonés", "Pino Negro", "Ficus Retusa", 
    "Olmo Chino", "Enebro", "Azalea"
  ];

  return (
    <>
      <Navbar />
      <main className="content-section">
        <div style={{ width: '100%' }}>
          <h1 style={{ textAlign: 'center' }}>Nuestra Colección</h1>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Un vistazo a algunos de los ejemplares en los que hemos trabajado.
          </p>
          
          <div className="gallery-grid">
            {misArboles.map((arbol, index) => (
              <GalleryItem key={index} treeName={arbol} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;