import React, { useState } from 'react';
import { authService } from '../services/authService';

export const Login = ({ onLoginSuccess, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await authService.login(email, password);
      if (onLoginSuccess) {
        onLoginSuccess(user);
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
                <h3 className="fw-bold text-secondary fs-4 mt-2">¡Bienvenido de nuevo!</h3>
                <p className="text-muted small">Ingresa tus credenciales para acceder a tu cuenta</p>
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
                  <label htmlFor="loginEmail" className="form-label fw-semibold text-dark small">
                    Correo Electrónico
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope text-muted" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                      </svg>
                    </span>
                    <input
                      type="email"
                      id="loginEmail"
                      className="form-control bg-light border-start-0 ps-0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="ejemplo@correo.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="loginPassword" className="form-label fw-semibold text-dark small">
                    Contraseña
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock text-muted" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/>
                      </svg>
                    </span>
                    <input
                      type="password"
                      id="loginPassword"
                      className="form-control bg-light border-start-0 ps-0"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-bold py-2 shadow-sm rounded-3 text-dark"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  ) : null}
                  {loading ? 'Ingresando...' : 'Iniciar Sesión'}
                </button>
              </form>

              {/* Pie de página de la tarjeta */}
              <div className="text-center mt-4 pt-3 border-top">
                <p className="text-muted small mb-0">
                  ¿Aún no tienes cuenta?{' '}
                  <button
                    type="button"
                    onClick={onSwitchToRegister}
                    className="btn btn-link p-0 fw-bold text-decoration-none text-warning"
                  >
                    Regístrate aquí
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

export default Login;