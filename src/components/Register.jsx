import React from "react";
import "../css/register.css";

export default function RegisterPage() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Form Data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    let isValid = true;
    let errorMessage = "";

    // Validation for first name
    if (!firstName) {
      isValid = false;
      errorMessage += "First Name is required.\n";
    }

    // Validation for last name
    if (!lastName) {
      isValid = false;
      errorMessage += "Last Name is required.\n";
    }

    // Validation for phone number using a regex pattern
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phone.match(phonePattern)) {
      isValid = false;
      errorMessage += "Phone number must be in the format 123-456-7890.\n";
    }

    // Validation for gender selection
    if (!gender) {
      isValid = false;
      errorMessage += "Please select a gender.\n";
    }

    // Validation for email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
      isValid = false;
      errorMessage += "Please enter a valid email address.\n";
    }

    // Validation for password
    if (password.length < 6) {
      isValid = false;
      errorMessage += "Password must be at least 6 characters long.\n";
    }

    if (isValid) {
      alert("Form is valid and ready to be submitted.");
    } else {
      alert(errorMessage);
    }
  };

  return (
    <section id="register">
      <div className="form-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="First Name" required />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Last Name" required />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="123-456-7890"
          />

          <label htmlFor="gender">Gender</label>
          <div className="gender-options">
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="male" id="male" />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              defaultChecked
            />
            <label htmlFor="nonbinary">Nonbinary</label>
            <input
              type="radio"
              name="gender"
              value="nonbinary"
              id="nonbinary"
            />
          </div>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />

          <button className="create" type="submit">
            Create
          </button>
        </form>
        <div className="links">
          <a href="/signin">Already have an account? Login</a>
          <a href="/store">Return to Store</a>
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </section>
  );
}
