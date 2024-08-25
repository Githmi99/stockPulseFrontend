import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../services/api';
import './RegisterForm.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUpClick = async (e) => {
    e.preventDefault();
    try {
      await signup(formData).unwrap();
      navigate('/dashboard'); // Navigate to dashboard after successful signup
    } catch (err) {
      console.error('Signup failed:', err);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="image-container">
          <img src="/images/register.jpg" alt="Background" />
        </div>
        <div className="form-container">
          <h2>Register</h2>
          <p>Manage all your inventory efficiently</p>
          <p>Let's get you all set up so you can verify your personal account and begin setting up your work profile.</p>
          <form onSubmit={handleSignUpClick}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                minLength="2"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                minLength="2"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone no."
                minLength="8"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to all terms, privacy policies, and fees</label>
            </div>
            <button type="submit" className="sign-up-button" disabled={isLoading}>
              {isLoading ? 'Signing up...' : 'Sign up'}
            </button>
          </form>
          <p className="login-link">Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
