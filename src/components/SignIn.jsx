import React from "react";
import { Link } from "react-router-dom";
import "../css/signin.css";

export default function SignInPage() {
  return (
    <section id="signin" className="content-block">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Email" />

        <label htmlFor="password">Password</label>
        <input type="text" id="password" placeholder="Password" />
        <button type="submit">SIGN IN</button>
      </form>
      <div className="links">
        <Link to="/register">Create Account</Link>
        <Link to="/">Return to Store</Link>
        <Link to="#">Forgot your password?</Link>
      </div>
    </section>
  );
}
