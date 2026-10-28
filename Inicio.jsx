import productos from '../data/productos.json';

const heroImg = productos[0].imagen;

export default function Inicio() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="eyebrow">LIBRERÍA INDEPENDIENTE</p>
            <h1 className="display-4 fw-bold">
              Tu rincón literario <span className="text-warning">favorito.</span>
            </h1>
            <p className="lead text-secondary my-4">
              Especialistas en novelas gráficas, literatura fantástica, ciencia ficción y mangas. Explora nuestra selección recomendada del mes.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-dark btn-lg" href="#catalogo">
                Explorar Catálogo ↗
              </a>
              <a className="btn btn-outline-dark btn-lg" href="#nosotros">
                Sobre Nosotros
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image-wrap">
              <img src={heroImg} alt="Destacado BookNook" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}