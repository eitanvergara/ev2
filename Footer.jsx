import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <Logo />
            <p className="mt-3 text-secondary">
              Tu librería de barrio favorita, ahora en línea.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#inicio" className="text-white me-3">Inicio</a>
            <a href="#catalogo" className="text-white me-3">Catálogo</a>
            <a href="#contacto" className="text-white">Contacto</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BookNook Librería Digital.</span>
          <a href="#inicio" className="text-white">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}