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
    <Container>
      <Navbar expand="lg">
        <Container>
          <Link to="/">User Name</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/home">Home</Link>
              <Link to="/blog">Blog</Link>
            
            </Nav>

            <Nav className="profile-login">
              {user && (
                <img className="profile-img" src={user.photoURL} alt="" />
              )}
              {user && <p>{user.email}</p>}

              {user ? (
                <Button onClick={handleLogOut} variant="dark">
                  LogOut
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
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
