import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SignUpForm = () => {
  // State for managing form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Handle form submission and log the values to console
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  // Toggle password visibility
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa', // Light background for better contrast
    margin: 0,
    fontFamily: "'Roboto', sans-serif"
  };

  const cardStyle = {
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Soft shadow effect
    backgroundColor: 'white',
    maxWidth: '500px',
    width: '100%',
  };

  const cardBodyStyle = {
    padding: '30px', // Add padding to space out the content
  };

  const headingStyle = {
    color: '#007bff', // Blue color for the heading
    textAlign: 'center',
    marginBottom: '30px',
    fontWeight: 600, // Slightly bolder text
  };

  const inputStyle = {
    borderRadius: '10px', // Rounded input fields
    border: '1px solid #ddd', // Light border
    padding: '15px', // Extra padding for input fields
    fontSize: '16px', // Larger text for better readability
    transition: 'all 0.3s ease', // Smooth transition for hover/focus effects
  };

  const inputFocusStyle = {
    borderColor: '#007bff', // Blue border on focus
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)', // Blue glow effect on focus
  };

  const buttonStyle = {
    fontSize: '16px',
    backgroundColor: '#007bff', // Blue background color
    border: 'none',
    padding: '15px', // Padding to make the button bigger
    borderRadius: '10px', // Rounded corners for the button
    color: 'white', // White text
    width: '100%', // Full width button
    cursor: 'pointer', // Change cursor to pointer on hover
    transition: 'background-color 0.3s ease', // Smooth transition for background color
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3', // Darker blue on hover
  };

  const formGroupStyle = {
    marginBottom: '20px', // Space between each form field
  };

  return (
    <Container style={containerStyle}>
      <Row className="w-100">
        <Col md={6} sm={12}>
          <Card style={cardStyle}>
            <Card.Body style={cardBodyStyle}>
              <h2 style={headingStyle}>Sign Up</h2>
              <Form onSubmit={handleSubmit}> {/* Handle form submission */}
                <Form.Group controlId="formName" style={formGroupStyle}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                    style={inputStyle}
                    value={name} // Bind state value
                    onChange={(e) => setName(e.target.value)} // Update state value on input change
                    onFocus={(e) => e.target.style = { ...inputStyle, ...inputFocusStyle }}
                    onBlur={(e) => e.target.style = inputStyle}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" style={formGroupStyle}>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                    style={inputStyle}
                    value={email} // Bind state value
                    onChange={(e) => setEmail(e.target.value)} // Update state value on input change
                    onFocus={(e) => e.target.style = { ...inputStyle, ...inputFocusStyle }}
                    onBlur={(e) => e.target.style = inputStyle}
                  />
                </Form.Group>

                {/* Password input with Show/Hide functionality */}
                <Form.Group controlId="formPassword" style={formGroupStyle}>
                  <Form.Label>Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={passwordVisible ? "text" : "password"} // Toggle between text and password
                      placeholder="Enter your password"
                      required
                      style={inputStyle}
                      value={password} // Bind state value
                      onChange={(e) => setPassword(e.target.value)} // Update state value on input change
                      onFocus={(e) => e.target.style = { ...inputStyle, ...inputFocusStyle }}
                      onBlur={(e) => e.target.style = inputStyle}
                    />
                    {/* Toggle button to show/hide password */}
                    <Button
                      variant="link"
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#007bff',
                        fontSize: '14px',
                        textDecoration: 'none',
                      }}
                      onClick={togglePassword}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </Button>
                  </div>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={buttonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                  Sign Up
                </Button>

                {/* Login Link */}
                <Link
                  to="/login" // Use Link to navigate to the login page
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '20px', // Add space between buttons
                    color: '#007bff', // Blue text color
                    textDecoration: 'none', // Remove underline
                  }}
                >
                  Already have an account? Login here
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
