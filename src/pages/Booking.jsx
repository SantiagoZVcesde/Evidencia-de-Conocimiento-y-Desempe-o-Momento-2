import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

const Booking = () => {
  return (
    <>
      <Navbar />
      <main className="main-content philosophy-layout-Filosofia">
        <div className="section-header-booking">
          <h1 className="title-Booking ">Reserva un Taller</h1>
          <p className="subtitle">Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.</p>
        </div>
        <br></br>

        <div className="form-card">
          <BookingForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Booking;