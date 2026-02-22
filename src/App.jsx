import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default function App() {
  // 🔹 LIFTED STATE (shared between pages)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="container">
      <h1>React Authentication Demo</h1>

      {isAuthenticated ? (
        <>
          <h2>Welcome! You are logged in ✅</h2>
          <button onClick={() => setIsAuthenticated(false)}>
            Logout
          </button>
        </>
      ) : (
        <>
          <nav>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>

          <Routes>
            <Route
              path="/signin"
              element={
                <SignIn
                  onAuthenticate={() => setIsAuthenticated(true)}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <SignUp
                  onAuthenticate={() => setIsAuthenticated(true)}
                />
              }
            />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        </>
      )}
    </div>
  );
}
