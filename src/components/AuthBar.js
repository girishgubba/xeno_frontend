import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function AuthBar() {
  const { user } = useContext(AuthContext);

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const handleLogout = () => {
    window.location.href = "http://localhost:5000/auth/logout";
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      borderBottom: "1px solid #ccc",
      marginBottom: "20px"
    }}>
      <div>
        <Link to="/" style={{ marginRight: "15px" }}>Audience Builder</Link>
        <Link to="/history">Campaign History</Link>
      </div>

      <div>
        {user ? (
          <>
            <span>
              Welcome, {user.name} ({user.email})
            </span>
            <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
              Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin}>Login with Google</button>
        )}
      </div>
    </div>
  );
}

export default AuthBar;
