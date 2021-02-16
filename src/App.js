import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar.js";
import Feed from "./Components/Feed.js";
import Widget from "./Components/Widget.js";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Switch, Route, Redirect } from "react-router-dom";
import auth from "./Components/firebaseAuth";
import "./App.css";
import { AuthProvider } from "./Components/AuthContext";
import PrivateRoutes from "./Components/PrivateRoutes";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>

          <PrivateRoutes exact path="/">
            <Sidebar />

            <Feed />

            <Widget />
          </PrivateRoutes>
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
