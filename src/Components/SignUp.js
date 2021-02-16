import React, { useState, useCallback } from "react";
import "./SignUp.css";
import { Twitter } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import auth from "./firebaseAuth";
import Login from "./Login";

function SignUp({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  
  
  const handleSignUp = useCallback(
    //console.log(email+password)

    async (event) => {
      event.preventDefault();
      try {
        await auth.createUserWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="login">
      <div className="login__header">
        <Twitter className="twitterIcon" />
        <h3>Sign up for Twitter</h3>
      </div>
      <div className="login__form">
        <form>
          <div className="login__formInput">
            <span>Phone, email, or username</span>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              value={email}
            ></input>
          </div>

          <div className="login__formInput">
            <span>Password</span>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              value={password}
            ></input>
          </div>
          <Button
            type="submit"
            variant="outlined"
            fullWidth
            className="login__formButton"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <div className="login__footer">
        <Link to="/login">Log in to Twitter</Link>
      </div>
    </div>
  );
}

export default SignUp;
