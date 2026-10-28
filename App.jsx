import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Inicio from './components/Inicio';
import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';
import About from './components/About';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { authService } from './services/authService';
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [vistaActual, setVistaActual] = useState('inicio'); // 'inicio' | 'login' | 'register'

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    setVistaActual('inicio');
  };

  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
    setVistaActual('inicio');
  };

  const handleNavClick = () => {
    // Regresa la vista al contenido principal para que los enlaces de ancla (#) funcionen siempre
    setVistaActual('inicio');
  };

  return (
    <>
      <Header 
        currentUser={currentUser} 
        onLogout={handleLogout}
        onOpenLogin={() => setVistaActual('login')}
        onOpenRegister={() => setVistaActual('register')}
        onNavClick={handleNavClick}
      />
      
      <main id="contenido">
        {vistaActual === 'login' && (
          <Login onLoginSuccess={handleAuthSuccess} />
        )}

        {vistaActual === 'register' && (
          <Register 
            onRegisterSuccess={handleAuthSuccess} 
            onSwitchToLogin={() => setVistaActual('login')} 
          />
        )}

        {vistaActual === 'inicio' && (
          <>
            <Inicio />
            <Catalogo />
            <Carrito />
            <Blogs />
            <About />
            <Contacto />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}