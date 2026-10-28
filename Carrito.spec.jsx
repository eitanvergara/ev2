import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Producto from "../components/Producto";
import Carrito from "../components/Carrito";
import { CartProvider } from "../context/CartContext";

describe("Pruebas Unitarias - Carrito y Negocio", () => {
  afterEach(cleanup);

  it("3-AGREGAR PRODUCTO A CARRITO", () => {
    render(
      <CartProvider>
        <Producto id={1} titulo="Comic de Batman" precio={15000} />
        <Carrito />
      </CartProvider>
    );
    
    const btnAñadir = screen.getByText(/Añadir al carrito/i);
    fireEvent.click(btnAñadir);
    
    const elementosBatman = screen.getAllByText(/Comic de Batman/i);
    expect(elementosBatman.length).toBeGreaterThan(1);
  });

  it("4-SUMAR PRODUCTO EN CARRITO", () => {
    render(
      <CartProvider>
        <Producto id={1} titulo="Comic de Batman" precio={15000} />
        <Carrito />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText(/Añadir al carrito/i));
    
    const btnSumar = screen.getByText("+");
    fireEvent.click(btnSumar); 
    
    const cantidad = screen.getByText("2");
    expect(cantidad).not.toBeNull();
  });

  it("5-ELIMINAR PRODUCTO CARRITO", () => {
    render(
      <CartProvider>
        <Producto id={1} titulo="Comic Especial" precio={15000} />
        <Carrito />
      </CartProvider>
    );
    
    // Lo agregamos
    fireEvent.click(screen.getByText(/Añadir al carrito/i));
    
    // Lo eliminamos
    const btnEliminar = screen.getByText(/Eliminar/i);
    fireEvent.click(btnEliminar);
    
    // Al eliminar el único producto, tu código muestra este texto:
    const mensajeVacio = screen.getByText(/El carrito está vacío/i);
    expect(mensajeVacio).not.toBeNull();
  });

  it("9-AGREGAR MARCAPAGINAS: Regla de negocio FREE", () => {
    render(
      <CartProvider>
        <Producto id={99} titulo="Enciclopedia Marvel" precio={40000} />
        <Carrito />
      </CartProvider>
    );
    
    // Agregamos un producto de $40.000 (activa tu regla de >35.000)
    fireEvent.click(screen.getByText(/Añadir al carrito/i));
    
    // Verificamos que tu sistema inyectó el Badge verde
    const regaloBadge = screen.getByText(/¡Regalo!/i);
    expect(regaloBadge).not.toBeNull();
  });
});