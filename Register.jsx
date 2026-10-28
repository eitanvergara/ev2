import React, { useState } from 'react';
import { authService } from '../services/authService';

export const Register = ({ onRegisterSuccess, onSwitchToLogin }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);

    try {
      const user = await authService.register(nombre, email, password);
      if (onRegisterSuccess) {
        onRegisterSuccess(user);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card border-0 shadow-lg rounded-4 p-4">
            <div className="card-body">
              {/* Encabezado */}
              <div className="text-center mb-4">
                <span className="fs-1 fw-bold text-dark d-block">BookNook</span>
                <h3 className="fw-bold text-secondary fs-4 mt-2">Crear nueva cuenta</h3>
                <p className="text-muted small">Únete a nuestra comunidad de lectores</p>
              </div>

              {/* Mensaje de error */}
              {error && (
                <div className="alert alert-danger alert-dismissible fade show text-center small rounded-3 mb-4" role="alert">
                  {error}
                </div>
              )}

              {/* Formulario */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="regNombre" className="form-label fw-semibold text-dark small">
                    Nombre Completo
                  </label>

                  <input
                    type="text"
                    id="regNombre"
                    className="form-control bg-light"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="regEmail" className="form-label fw-semibold text-dark small">
                    Correo Electrónico
                  </label>

                  <input
                    type="email"
                    id="regEmail"
                    className="form-control bg-light"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="regPassword" className="form-label fw-semibold text-dark small">
                    Contraseña
                  </label>

                  <input
                    type="password"
                    id="regPassword"
                    className="form-control bg-light"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="regConfirmPassword" className="form-label fw-semibold text-dark small">
                    Confirmar Contraseña
                  </label>

                  <input
                    type="password"
                    id="regConfirmPassword"
                    className="form-control bg-light"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-bold py-2 shadow-sm rounded-3 text-dark"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  ) : null}
                  {loading ? 'Registrando...' : 'Crear Cuenta'}
                </button>
              </form>

              {/* Pie de página */}
              <div className="text-center mt-4 pt-3 border-top">
                <p className="text-muted small mb-0">
                  ¿Ya tienes cuenta?{' '}
                  <button
                    type="button"
                    onClick={onSwitchToLogin}
                    className="btn btn-link p-0 fw-bold text-decoration-none text-warning"
                  >
                    Inicia sesión aquí
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;