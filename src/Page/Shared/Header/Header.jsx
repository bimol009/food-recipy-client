import "./Header.css";
import { useContext } from "react";
import { Button, Container, Nav, NavLink, Navbar } from "react-bootstrap";
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
    <div className="">
      <Navbar expand="lg p-4  navbar-dark  rounded">
        <Container>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <Link
              className="fw-bolder fs-2 rounded  text-decoration-none"
              to="/"
            >
              CHEF COOKING
            </Link>
          </NavLink>
          ;
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs" className="mx-auto">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Link
                  className="text-decoration-none text-info fs-3 fw-bolder"
                  to="/"
                >
                  Home
                </Link>
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Link
                  className="text-decoration-none text-info fs-3 fw-bolder "
                  to="/"
                >
                  About
                </Link>
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Link
                  className="text-decoration-none text-info fs-3 fw-bolder ms-3"
                  to="/chef"
                >
                  Chef
                </Link>
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <Link
                  className="text-decoration-none text-info fs-3 fw-bolder ms-3"
                  to="/blog"
                >
                  Blog
                </Link>
              </NavLink>
            </Nav>

            <Nav className="profile-login">
              {user && (
                <img className="profile-img" src={user.photoURL} alt="" />
              )}
              {user && <p className="text-white">{user.displayName}</p>}

              {user ? (
                <Button
                  className="fs-3 fw-bold"
                  onClick={handleLogOut}
                 
                >
                  LogOut
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="fs-3 fw-bold" >
                    Login
                  </Button>
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
