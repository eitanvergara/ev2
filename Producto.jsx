import React from 'react';
import { useCart } from '../context/CartContext';

export default function Producto(producto) {
  const { addToCart } = useCart();
  const { id, titulo, nombre, precio, price, imagen, image, descripcion } = producto;

  return (
    <div className="card h-100 shadow-sm border-0">
      <img 
        src={imagen || image || 'https://via.placeholder.com/300x400'} 
        className="card-img-top object-fit-cover" 
        alt={titulo || nombre} 
        style={{ height: '280px' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{titulo || nombre}</h5>
        <p className="card-text text-muted small flex-grow-1">{descripcion}</p>
        <div className="d-flex align-items-center justify-content-between mt-3">
          <span className="fs-5 fw-bold text-dark">${precio || price}</span>
          <button 
            className="btn btn-dark btn-sm rounded-pill px-3"
            onClick={() => addToCart(producto)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}