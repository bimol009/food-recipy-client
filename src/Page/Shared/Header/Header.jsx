import "./Header.css";
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

// import Marquee from "react-fast-marquee";

const Header = () => {
  const { user, logOutEmail } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutEmail()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <Navbar expand="lg p-4  navbar-dark bg-dark rounded">
        <Container>
          <Link className="fw-bolder fs-2 text-white rounded bg-danger text-decoration-none" to="/">
            CHEF COOKING
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              variant="tabs"
              className="mx-auto"
            >
              <Link className="text-decoration-none text-info fs-3 fw-bolder" to="/">
                Home
              </Link>
              <Link className="text-decoration-none text-info fs-3 fw-bolder ms-3" to="/">
                About
              </Link>
              <Link className="text-decoration-none text-info fs-3 fw-bolder ms-3" to="/">
                Contact
              </Link>
              <Link className="text-decoration-none text-info fs-3 fw-bolder ms-3" to="/blog">
                Blog
              </Link>
            </Nav>
            

            <Nav className="profile-login">
              {user && (
                <img className="profile-img" src={user.photoURL} alt="" />
              )}
              {user && <p className="text-white">{user.email}</p>}

              {user ? (
                <Button className="fs-3 fw-bold" onClick={handleLogOut} variant="warning">
                  LogOut
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="fs-3 fw-bold" variant="warning">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;
