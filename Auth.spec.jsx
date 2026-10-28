import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Header } from "../components/Header";
import { CartProvider } from "../context/CartContext";

describe("Pruebas Unitarias - Cuentas", () => {
  afterEach(cleanup);

  it("1-INICIO SESION CORRECTO: Ingreso en los inputs", () => {
    const { container } = render(<Login />);
    
    const emailInput = container.querySelector("#loginEmail");
    const passInput = container.querySelector("#loginPassword");
    
    fireEvent.change(emailInput, { target: { value: "test@duoc.cl" } });
    fireEvent.change(passInput, { target: { value: "123456" } });
    
    expect(emailInput.value).toBe("test@duoc.cl");
    expect(passInput.value).toBe("123456");
  });

  it("2-REGISTRO CORRECTO: Ingreso en los inputs", () => {
    const { container } = render(<Register />);
    
    const nombreInput = container.querySelector("#regNombre");
    const emailInput = container.querySelector("#regEmail");
    
    fireEvent.change(nombreInput, { target: { value: "Lector Frecuente" } });
    fireEvent.change(emailInput, { target: { value: "lector@duoc.cl" } });
    
    expect(nombreInput.value).toBe("Lector Frecuente");
    expect(emailInput.value).toBe("lector@duoc.cl");
  });

  it("8-CERRAR SESION CORRECTAMENTE", () => {
    const mockLogout = jasmine.createSpy("logoutSpy");
    
    render(
      <CartProvider>
        <Header currentUser={{ nombre: "Admin" }} onLogout={mockLogout} />
      </CartProvider>
    );
    
    const btnLogout = screen.getByText(/Cerrar sesión/i);
    fireEvent.click(btnLogout);
    
    expect(mockLogout).toHaveBeenCalled();
  });
});