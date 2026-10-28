import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Blogs from "../components/Blogs";
import Contacto from "../components/Contacto";

describe("Pruebas Unitarias - Interacción", () => {
  afterEach(cleanup);

  it("6-ABRIR BLOGS: Renderiza los artículos", () => {
    render(<Blogs />);
    
    // En tu archivo Blogs.jsx los botones dicen "Leer artículo"
    const btns = screen.getAllByText(/Leer artículo/i);
    expect(btns.length).toBeGreaterThan(0);
  });

  it("7-RELLENOS DE CONTACTO: Se pueden ingresar datos", () => {
    const { container } = render(<Contacto />);
    
    // Hacemos match perfecto con los ID de Contacto.jsx
    const inputNombre = container.querySelector("#nombre");
    const inputCorreo = container.querySelector("#correo");
    const inputMensaje = container.querySelector("#mensaje");
    
    fireEvent.change(inputNombre, { target: { value: "Juan" } });
    fireEvent.change(inputCorreo, { target: { value: "juan@correo.com" } });
    fireEvent.change(inputMensaje, { target: { value: "Consulta" } });
    
    expect(inputNombre.value).toBe("Juan");
    expect(inputCorreo.value).toBe("juan@correo.com");
    expect(inputMensaje.value).toBe("Consulta");
  });
});