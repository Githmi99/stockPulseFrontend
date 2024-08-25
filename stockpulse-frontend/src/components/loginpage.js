import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../services/api';
import { FaGoogle } from 'react-icons/fa';
import './loginpage.css';
import './GoogleSignInButton.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password }).unwrap();
      localStorage.setItem('token', data.token); // Store token if login is successful
      navigate('/dashboard'); // Navigate to dashboard only if login is successful
    } catch (err) {
      console.error('Login failed:', err);
      alert('Invalid credentials. Please try again.'); // Show an alert if login fails
    }
  };

  return (
    <Container fluid className="login-container">
      <Row>
        <Col md={6} className="left-section">
          <div className="logo">
            <h1>Excel Tech Consulting</h1>
            <img src="/images/login.jpg" alt="Electronic components" className="left-image" />
          </div>
        </Col>
        <Col md={6} className="right-section">
          <div className="welcome-back">
            <h1 className="brand">STOCK<span className="highlight">PULSE</span></h1>
            <h2>Welcome Back 👋</h2>
            <p>
              Sign in to stay informed about the latest developments with your stocks. Track real-time updates and gain insights into the current status of your investments effortlessly.
            </p>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Form.Text className="text-muted">
                  <p>Forgot Password?</p>
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" className="signin-btn" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>

              <div className="divider">Or</div>

              <Button variant="light" className="google-signin-btn">
                <FaGoogle className="google-icon" /> Sign in with Google
              </Button>

              <div className="signup-link">
                Don’t have an account? <Button variant="link" onClick={() => navigate('/register')}>Sign Up</Button>
              </div>
            </Form>
            {error && <p style={{ color: 'red' }}>Login failed: {error.data?.msg}</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
