import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  return (
    <>
      <Navbar />
      <main className="content-section">
        <div className="form-container">
          <h1>Reserva un Taller</h1>
          <p>Déjanos tus datos y nos pondremos en contacto pronto.</p>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Booking;