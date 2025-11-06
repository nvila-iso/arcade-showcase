import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();

  const saveToken = (token) => {
    setToken(token);
    sessionStorage.setItem("token", token);
  };

  const login = async (credentials) => {
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "login failed");
      }
      const data = await res.json();
      saveToken(data.token);
      return data;
    } catch (error) {
      console.error(error.message);
      throw error.message;
    }
  };

  const logout = () => {
    try {
      sessionStorage.removeItem("token");
      setToken(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const value = { token, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
