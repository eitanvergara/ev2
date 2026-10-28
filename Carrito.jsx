import React from 'react';
import { useCart } from '../context/CartContext';

function Carrito() {
  const { cart, removeFromCart, clearCart, totalPrice, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <section id="carrito" className="container my-5 text-center p-4 bg-light rounded shadow-sm">
        <h3 className="mb-3">Tu Carrito de Compras</h3>
        <p className="text-muted">El carrito está vacío. Agrega libros desde el catálogo.</p>
      </section>
    );
  }

  return (
    <section id="carrito" className="container my-5 p-4 bg-white rounded shadow-sm border">
      <h3 className="mb-4">Tu Carrito de Compras</h3>
      <div className="table-responsive">
        <table className="table align-middle text-center">
          <thead>
            <tr>
              <th className="text-start">Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className={item.esRegalo ? "table-success" : ""}>
                <td className="text-start fw-semibold">
                  {item.titulo || item.nombre || item.title}
                </td>
                <td>${item.precio || item.price || 0}</td>
                
                {/* Columna de Cantidad con botones condicionales */}
                <td>
                  {!item.esRegalo ? (
                    <div className="d-flex align-items-center justify-content-center">
                      <button 
                        className="btn btn-sm btn-outline-secondary px-2 py-0 fs-5"
                        onClick={() => {
                          if (item.cantidad > 1) {
                            updateQuantity(item.id, item.cantidad - 1);
                          } else {
                            removeFromCart(item.id);
                          }
                        }}
                      >
                        -
                      </button>
                      <span className="mx-3 fw-bold">{item.cantidad}</span>
                      <button 
                        className="btn btn-sm btn-outline-secondary px-2 py-0 fs-5"
                        onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <span className="badge bg-success">¡Regalo!</span>
                  )}
                </td>

                <td>${(item.precio || item.price || 0) * item.cantidad}</td>
                
                {/* Botón de Eliminar condicional */}
                <td>
                  {!item.esRegalo && (
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
        <button className="btn btn-outline-secondary" onClick={clearCart}>
          Vaciar Carrito
        </button>
        <h4>
          Total: <span className="text-success fw-bold">${totalPrice}</span>
        </h4>
      </div>
    </section>
  );
}

export default Carrito;