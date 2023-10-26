import React from "react";

class Dialog extends React.Component {
  render() {
    return (
      <div>
        <h2>Log in to your account</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />

          <button type="submit">Log In</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    );
  }
}

export default Dialog;
