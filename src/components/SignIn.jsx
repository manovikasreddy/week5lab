import { useState } from "react";

function SignIn({ login, switchPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const valid = email.includes("@") && password.length >= 6;

  return (
    <div className="card">
      <h2>Sign In</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" disabled={!valid} onClick={login}>
        Sign In
      </button>

      <button type="button" className="link" onClick={switchPage}>
        New user? Sign Up
      </button>
    </div>
  );
}

export default SignIn;