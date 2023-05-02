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
    <Container className="p-4">
      <Navbar expand="lg">
        <Container>
          <Link className="fw-bold fs-1 text-white rounded p-2 bg-danger text-decoration-none" to="/">
            CHEF COOKING
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              variant="tabs"
              className="mx-auto"
            >
              <Link className="text-decoration-none text-danger fs-3 fw-bolder" to="/">
                Home
              </Link>
              <Link className="text-decoration-none text-danger fs-3 fw-bolder ms-3" to="/blog">
                Blog
              </Link>
            </Nav>
            

            <Nav className="profile-login">
              {user && (
                <img className="profile-img" src={user.photoURL} alt="" />
              )}
              {user && <p>{user.email}</p>}

              {user ? (
                <Button className="fs-3 fw-bold" onClick={handleLogOut} variant="dark">
                  LogOut
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="fs-3 fw-bold" variant="dark">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
