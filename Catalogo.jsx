import { useState } from 'react';
import productos from '../data/productos.json';
import Producto from './Producto';
import './Catalogo.css';

const PRODUCTOS_POR_PAGINA = 6;

export default function Catalogo() {
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(productos.length / PRODUCTOS_POR_PAGINA);
  const paginaVisible = Math.min(paginaActual, Math.max(1, totalPaginas));
  const inicio = (paginaVisible - 1) * PRODUCTOS_POR_PAGINA;
  const productosVisibles = productos.slice(inicio, inicio + PRODUCTOS_POR_PAGINA);
  const fin = inicio + productosVisibles.length;

  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <section id="catalogo" className="section-space py-5">
      <div className="container">
        <div className="mb-4">
          <p className="eyebrow text-warning fw-bold text-uppercase">CATÁLOGO DISPONIBLE</p>
          <h2 className="display-6 fw-bold">Libros y Colecciones</h2>
          <p className="text-secondary small">
            Mostrando {inicio + 1}–{fin} de {productos.length} títulos
          </p>
        </div>

        <div className="row g-4" id="productos-catalogo">
          {productosVisibles.map((prod) => (
            <div className="col-md-6 col-lg-4" key={prod.id}>
              <Producto {...prod} />
            </div>
          ))}
        </div>

        {totalPaginas > 1 && (
          <nav className="mt-5" aria-label="Navegación del catálogo">
            <ul className="pagination catalogo-paginacion justify-content-center gap-1">
              <li className={`page-item ${paginaVisible === 1 ? 'disabled' : ''}`}>
                <button
                  type="button"
                  className="page-link"
                  onClick={() => setPaginaActual(paginaVisible - 1)}
                  disabled={paginaVisible === 1}
                >
                  Anterior
                </button>
              </li>
              {paginas.map((num) => (
                <li key={num} className={`page-item ${num === paginaVisible ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="page-link"
                    onClick={() => setPaginaActual(num)}
                  >
                    {num}
                  </button>
                </li>
              ))}
              <li className={`page-item ${paginaVisible === totalPaginas ? 'disabled' : ''}`}>
                <button
                  type="button"
                  className="page-link"
                  onClick={() => setPaginaActual(paginaVisible + 1)}
                  disabled={paginaVisible === totalPaginas}
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}