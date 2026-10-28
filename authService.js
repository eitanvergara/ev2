// src/services/authService.js

const USERS_KEY = 'booknook_registered_users';
const SESSION_KEY = 'booknook_user_session';

export const authService = {
  // Obtener lista de usuarios registrados
  getUsers: () => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },

  // Registrar un nuevo usuario
  register: async (nombre, email, password) => {
    const users = authService.getUsers();
    
    // Verificar si el correo ya existe
    const exists = users.find((user) => user.email === email);
    if (exists) {
      throw new Error("El correo electrónico ya está registrado.");
    }

    const newUser = { nombre, email, password, role: "user" };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Iniciar sesión automáticamente al registrarse
    const sessionData = { nombre, email, role: "user" };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    
    return sessionData;
  },

  // Inicio de sesión comprobando en la lista de registrados
  login: async (email, password) => {
    const users = authService.getUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    // Usuario por defecto si la lista está vacía
    if (!user && email === "usuario@booknook.cl" && password === "123456") {
      const defaultUser = { nombre: "Usuario BookNook", email, role: "user" };
      localStorage.setItem(SESSION_KEY, JSON.stringify(defaultUser));
      return defaultUser;
    }

    if (user) {
      const sessionData = { nombre: user.nombre, email: user.email, role: user.role };
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
      return sessionData;
    }

    throw new Error("Credenciales inválidas. Verifica tu correo y contraseña.");
  },

  getCurrentUser: () => {
    const user = localStorage.getItem(SESSION_KEY);
    return user ? JSON.parse(user) : null;
  },

  logout: () => {
    localStorage.removeItem(SESSION_KEY);
  }
};