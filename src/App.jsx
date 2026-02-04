import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(false);
  const [page, setPage] = useState("signin");
  const handleLogin = (source) => {
    console.log("handleLogin called from:", source);
    setAuth(true);
  };

  return (
    <div className="container">
      <h1>Authentication</h1>

      {auth ? (
        <h2 className="success">Login Successful</h2>
      ) : page === "signin" ? (
        <SignIn
          login={() => handleLogin('SignIn')}
          switchPage={() => setPage("signup")}
        />
      ) : (
        <SignUp
          login={() => handleLogin('SignUp')}
          switchPage={() => setPage("signin")}
        />
      )}
    </div>
  );
}

export default App;