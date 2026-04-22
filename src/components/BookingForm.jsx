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
    console.log('Datos de la reserva:', formData);
    alert('Formulario enviado. Revisa la consola para ver los datos capturados.');
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label htmlFor="name">Nombre completo</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
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
          required 
          placeholder="tu@email.com" 
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="level">Nivel de experiencia</label>
        <select id="level" name="level" onChange={handleInputChange}>
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
          placeholder="¿Qué te gustaría aprender?" 
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button type="submit" class="btn btn-block">Enviar Solicitud</button>
    </form>
  );
};

export default BookingForm;