import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
export const AuthContext = createContext();

// Set Axios to always send cookies with requests
axios.defaults.withCredentials = true;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check login status on page load
    const checkAuthStatus = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/status");
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
