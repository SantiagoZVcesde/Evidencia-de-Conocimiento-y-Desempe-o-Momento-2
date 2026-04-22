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
      <main className="main-content">
        <div className="section-header">
          <h1 className="title-gallery">Nuestra Colección</h1>
          <p className="subtitle-gallery">
            Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.
          </p>
        </div>
        
        <div className="gallery-grid">
          {misArboles.map((arbol, index) => (
            <GalleryItem key={index} treeName={arbol} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;