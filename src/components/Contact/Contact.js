import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div style={{ background: "#131511", color: "white", padding: "1px" }}>
      <h2 className="text-center text-uppercase mt-5 text-primary">
        {" "}
        Contact Us
      </h2>
      <hr className="w-50 mx-auto text-primary bold" />

      <Container>
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Write Message </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="btn btn-primary mb-3"
          >
            Send Message
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
