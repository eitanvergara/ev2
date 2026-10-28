import React, { useState } from 'react';
import BlogFantasia from './BlogFantasia';
import BlogComics from './BlogComics';

function Blogs() {
  const [blogSeleccionado, setBlogSeleccionado] = useState(null);

  if (blogSeleccionado === 'fantasia') {
    return (
      <div className="container my-5">
        <button 
          className="btn btn-outline-secondary mb-3"
          onClick={() => setBlogSeleccionado(null)}
        >
          &larr; Volver a la lista de Blogs
        </button>
        <BlogFantasia />
      </div>
    );
  }

  if (blogSeleccionado === 'comics') {
    return (
      <div className="container my-5">
        <button 
          className="btn btn-outline-secondary mb-3"
          onClick={() => setBlogSeleccionado(null)}
        >
          &larr; Volver a la lista de Blogs
        </button>
        <BlogComics />
      </div>
    );
  }

  return (
    <section id="blogs" className="container my-5 py-4">
      <h2 className="text-center mb-4">Nuestro Blog</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Fantasías del Mes</h5>
              <p className="card-text flex-grow-1">
                Descubre nuestra selección de lecturas y recomendaciones sobre el género fantástico para este mes.
              </p>
              <button 
                className="btn btn-primary mt-auto"
                onClick={() => setBlogSeleccionado('fantasia')}
              >
                Leer artículo
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Guía de Cómics</h5>
              <p className="card-text flex-grow-1">
                Una guía recomendada para iniciarse en el fascinante mundo de los cómics y novelas gráficas.
              </p>
              <button 
                className="btn btn-primary mt-auto"
                onClick={() => setBlogSeleccionado('comics')}
              >
                Leer artículo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;