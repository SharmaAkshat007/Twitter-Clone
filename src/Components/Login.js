import React, {useState} from 'react'
import "./Login.css"
import { Twitter } from '@material-ui/icons'
import {Button} from '@material-ui/core'
import {Link} from "react-router-dom";
import auth from "./firebaseAuth"
import {Redirect} from "react-router-dom"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widget from "./Widget"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setEmailPassword = (e)=>{
        e.preventDefault();
        console.log("The email is "+email);
        console.log("The password is "+password);
    }


    return (
        <div className="login">
            <div className="login__header">
                <Twitter className="twitterIcon"/>
                <h3>Log in to Twitter</h3>
            </div>
            <div className="login__form">
                <form>
                    <div className="login__formInput">
                        <span >Phone, email, or username</span>
                        <input onChange = {e => {setEmail(e.target.value)}} type="text" value={email}></input>
                    </div>
                    
                    <div className="login__formInput">
                        <span>Password</span>
                        <input onChange={ e => {setPassword(e.target.value)}} type="password" value={password}></input>
                    </div>
                    <Button type="submit" variant="outlined" fullWidth className="login__formButton" onClick={setEmailPassword}>Log in</Button>
                </form>
            </div>
            <div className="login__footer">
                <a href="#">Forgot password?</a>
                <Link to="/signup">Sign up for Twitter</Link>
            </div>
        </div>
    )
}

export default Login
