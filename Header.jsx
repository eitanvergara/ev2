import React from 'react';
import { useCart } from '../context/CartContext';

export const Header = ({ currentUser, onLogout, onOpenLogin, onOpenRegister, onNavClick }) => {
  const { totalItems = 0 } = useCart() || {};

  return (
    <header className="border-bottom">
      {/* Barra superior de inicio de sesión */}
      <div className="bg-dark text-white py-1 px-3 text-end small">
        {currentUser ? (
          <div className="d-inline-flex align-items-center gap-2">
            <span>Hola, <strong>{currentUser.nombre || currentUser.email}</strong></span>
            <span>|</span>
            <button 
              onClick={onLogout} 
              className="btn btn-link text-white text-decoration-none p-0 border-0 small"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <>
            <button 
              onClick={onOpenLogin} 
              className="btn btn-link text-white text-decoration-none p-0 border-0 me-3 small"
            >
              Iniciar sesión
            </button>
            <span className="me-3">|</span>
            <button 
              onClick={onOpenRegister} 
              className="btn btn-link text-white text-decoration-none p-0 border-0 small"
            >
              Registrar usuario
            </button>
          </>
        )}
      </div>

      {/* Navegación principal */}
      <div className="container py-3 d-flex align-items-center justify-content-between">
        {/* Logo / Nombre */}
        <div className="d-flex align-items-center gap-2">
          <a href="#inicio" onClick={onNavClick} className="text-decoration-none">
            <span className="fs-3 fw-bold text-dark">BookNook</span>
          </a>
        </div>

        {/* Links del Menú */}
        <nav className="d-flex align-items-center gap-4">
          <a href="#inicio" onClick={onNavClick} className="text-warning fw-bold text-decoration-underline text-decoration-thickness-2">
            Home
          </a>
          <a href="#catalogo" onClick={onNavClick} className="text-secondary text-decoration-none fw-semibold">
            Productos
          </a>
          <a href="#about" onClick={onNavClick} className="text-secondary text-decoration-none fw-semibold">
            Nosotros
          </a>
          <a href="#blogs" onClick={onNavClick} className="text-secondary text-decoration-none fw-semibold">
            Blogs
          </a>
          <a href="#contacto" onClick={onNavClick} className="text-secondary text-decoration-none fw-semibold">
            Contacto
          </a>
        </nav>

        {/* Botón Carrito */}
        <div>
          <a 
            href="#carrito" 
            onClick={onNavClick}
            className="btn btn-outline-secondary rounded-pill px-3 py-1 d-flex align-items-center gap-2 text-decoration-none text-dark fw-semibold"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor" 
              className="bi bi-cart3" 
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7 1a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m7 0a1 1 0 1 1 1 0 .5.5 0 0 1-1 0"/>
            </svg>
            Cart ({totalItems})
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;