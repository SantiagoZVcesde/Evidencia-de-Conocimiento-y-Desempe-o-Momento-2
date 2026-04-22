import { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: 'beginner',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const nuevaReserva = {
        ...formData,
        id: Date.now(),
        fecha: new Date().toISOString()
      };

      const reservasPrevias = JSON.parse(localStorage.getItem('reservas_bonsai')) || [];

      const listaActualizada = [...reservasPrevias, nuevaReserva];
      localStorage.setItem('reservas_bonsai', JSON.stringify(listaActualizada));

      console.log('Reserva guardada con éxito:', nuevaReserva);
      alert('¡Datos capturados! Puedes verlos en la pestaña Application > LocalStorage.');

      setFormData({
        name: '',
        email: '',
        level: 'beginner',
        message: ''
      });

    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label htmlFor="name">Nombre completo</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          required 
          placeholder="Ej. Ana Silva" 
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          required 
          placeholder="tu@email.com" 
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="level">Nivel de experiencia</label>
        <select 
          id="level" 
          name="level" 
          value={formData.level} 
          onChange={handleInputChange}
        >
          <option value="beginner">Principiante (Nunca he tenido un Bonsái)</option>
          <option value="intermediate">Intermedio (Tengo algunos árboles)</option>
          <option value="advanced">Avanzado (Busco perfeccionar técnicas)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje (Opcional)</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          value={formData.message} 
          placeholder="¿Qué te gustaría aprender?" 
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-block">
        Enviar Solicitud
      </button>
    </form>
  );
};

export default BookingForm;