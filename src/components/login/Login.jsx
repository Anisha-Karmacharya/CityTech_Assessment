import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
const Login = () => {
  return (
    <div>
      <div className="title">
        <h1>CityTech Assessment</h1>
      </div>
      <div className="formContainer">
        <Form className="form">
          <Form.Group className="formGroup" controlId="formBasicEmail">
            <Form.Label className="formLabel">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="formGroup" controlId="formBasicPassword">
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="btnSubmit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
