import React, { useContext, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    createUserEmailPass,
    showEmailVerification,
    googleSignEmailPass,
    gitHubProviderEmailPass,
    user,
    createdProfile,
    setReload
  } = useContext(AuthContext);
  const emailRef = useRef("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    console.log(email, password, name, photo);

    createUserEmailPass(email, password)
      .then((result) => {
        const loggedUser = result.user;
        createdProfile(name,photo)
        .then(()=>{
          setReload(true)
        })
        if (!loggedUser.emailVerified) {
          alert("Please give a Verified Email");
        }
        form.reset("");
        console.log(loggedUser);

        showEmailVerification(result.user).then((result) => {
          alert("Please Verify Your Gmail");
        });
      })
      .catch((error) => console.log(error));
  };




  const acceptHandle = (e) => {
    setAccepted(e.target.checked);
  };

  const googleSign = () => {
    googleSignEmailPass()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })

      .catch((error) => {
        console.log(error);
      });

    setSuccess("SuccessFully Logged in");
  };
  const githubSign = () => {
    gitHubProviderEmailPass()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Navigate(from, { replace: true });
      })

      .catch((error) => {
        console.log(error);
      });

    setSuccess("SuccessFully Logged in");
  };

  return (
    <Container className="w-100 mx-auto mb-5 pb-5 mt-5">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            required
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            required
            ref={emailRef}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Your Photo</Form.Label>
          <Form.Control
            name="photo"
            type="text"
            required
            placeholder="Enter photo url"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type={show ? "text" : "password"}
            required
            placeholder="Password"
          />
          <p
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <button className="btn btn-link">Hide Pass</button>
            ) : (
              <button className="btn btn-link">Show Pass</button>
            )}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={acceptHandle}
            type="checkbox"
            name="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms and Condition</Link>
              </>
            }
          />
        </Form.Group>

        <Button
          className="w-100"
          disabled={!accepted}
          variant="primary"
          type="submit"
        >
          Register
        </Button>

        <h5 className="mt-4 text-center">
          ALready Have an account ?
          <Link to="/login" className="text-danger">
            Login
          </Link>
        </h5>

        <div onClick={googleSign} className="btn-control mt-5">
          <div className="display">
            <img
              className="google-img"
              src="https://i.ibb.co/0VYz0t4/download.png"
              alt=""
            />

            <p>Continue with google</p>
          </div>
        </div>

        <div onClick={githubSign} className="btn-control mt-5">
          <div className="display">
            <img
              className="google-img"
              src="https://i.ibb.co/TWkR133/download-1-removebg-preview.png"
              alt=""
            />

            <p>Continue with GitHub</p>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
