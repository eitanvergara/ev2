import { useState } from 'react';

export default function Contacto() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('¡Mensaje enviado exitosamente! Un librero de BookNook se pondrá en contacto pronto.');
  }

  return (
    <section id="contacto" className="section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <p className="eyebrow">CONTACTO</p>
            <h2>¡Hablemos de libros!</h2>
            <p className="text-secondary mt-3">
              Escríbenos para consultar stock, ediciones especiales o soporte sobre compras.
            </p>
          </div>
          <div className="col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label fw-bold" htmlFor="nombre">Nombre</label>
                  <input className="form-control" id="nombre" required placeholder="Tu nombre" />
                </div>
                <div className="col-sm-6">
                  <label className="form-label fw-bold" htmlFor="correo">Correo</label>
                  <input className="form-control" id="correo" type="email" required placeholder="tu@correo.com" />
                </div>
                <div className="col-12">
                  <label className="form-label fw-bold" htmlFor="mensaje">Mensaje</label>
                  <textarea className="form-control" id="mensaje" rows={4} required placeholder="¿En qué podemos ayudarte?" />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark w-100">
                    Enviar Mensaje ↗
                  </button>
                </div>
              </div>
              {status && <p className="alert alert-success mt-3 mb-0">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}