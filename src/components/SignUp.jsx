import { useState } from "react";

function SignUp({ login, switchPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const valid =
    email.includes("@") && password.length >= 6 && password === confirmPassword;

  return (
    <div className="card">
      <h2>Sign Up</h2>

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

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="button" disabled={!valid} onClick={login}>
        Sign Up
      </button>

      <button type="button" className="link" onClick={switchPage}>
        Already have an account? Sign In
      </button>
    </div>
  );
}

export default SignUp;