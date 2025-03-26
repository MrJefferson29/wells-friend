import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Header = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" className="navy" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <div className="brand">ALBATROSS</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            {loading ? (
              <div className="loading">Loading...</div>
            ) : (
              <Nav className="justify-content-end">
                <NavLink className="link" to="/" activeClassName="active">
                  HOME
                </NavLink>
                <NavLink className="link" to="/tracking" activeClassName="active">
                  TRACK
                </NavLink>
                {auth ? (
                  <NavLink className="link" to="/create-post" activeClassName="active">
                    NEW PACKAGE
                  </NavLink>
                ) : null}
                <NavLink className="link" to="/about" activeClassName="active">
                  ABOUT
                </NavLink>
                <NavLink className="link" to="/meet-the-team" activeClassName="active">
                  TEAM
                </NavLink>
                <NavLink className="link" to="/summary" activeClassName="active">
                  INSIGTHS
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;

const Styles = styled.div`
  .brand {
    font-family: 'Times New Roman', Times, serif;
    color: black;
    font-size: 2.2rem;
    letter-spacing: 2px;
    padding: 10px 0;
  }

  .toggle {
    background: aliceblue;
  }

  .navy {
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .loading {
    font-size: 1.5rem;
    color: #007bff;
    padding: 15px 0;
  }

  .link {
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: 700;
    color: black;
    margin-left: 30px;
    padding: 7px 0;
    font-family: 'Gaqire';
    position: relative;
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &:hover {
      color: #007bff;
      text-decoration: underline;
    }

    &.active {
      color: teal;
      text-decoration: underline;
    }

    @media (min-width: 768px) {
      font-size: 1.8rem;
      margin-left: 50px;
    }

    @media (max-width: 767px) {
      font-size: 1.4rem;
      margin-left: 20px;
    }
  }

  .eor {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
