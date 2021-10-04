import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const gotoBtn = (link) => {
    history.push(link);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => gotoBtn("/home")} className="logo">
            Programming Academy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                activeStyle={{
                  backgroundColor: "rgba(235, 231, 231, 0.555)",
                  color: "blue",
                }}
                className="nav-btn"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                activeStyle={{
                  backgroundColor: "rgba(235, 231, 231, 0.555)",
                  color: "blue",
                }}
                className="nav-btn"
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                activeStyle={{
                  backgroundColor: "rgba(235, 231, 231, 0.555)",
                  color: "blue",
                }}
                className="nav-btn"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeStyle={{
                  backgroundColor: "rgba(235, 231, 231, 0.555)",
                  color: "blue",
                }}
                className="nav-btn"
                eventkey={2}
                to="/contact"
              >
                {" "}
                Contact{" "}
              </NavLink>
            </Nav>

            <NavDropdown
              className="nav-btn2"
              title="All Services"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="nav-btn2"
                onClick={() => gotoBtn("/home")}
              >
                Home
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-btn2"
                onClick={() => gotoBtn("/services")}
              >
                Services
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-btn2"
                onClick={() => gotoBtn("/about")}
              >
                About
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="nav-btn2"
                onClick={() => gotoBtn("/contact")}
              >
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
