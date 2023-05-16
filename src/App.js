import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStoroge } from "./UserContext";
import User from "./Components/User/User";
import ProtectedRoute from "./Components/Help/ProtectedRoute";
import Photo from "./Components/Photo/Photo";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <UserStoroge>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    {" "}
                    <User />{" "}
                  </ProtectedRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
            </Routes>
            <Footer />
          </UserStoroge>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
