import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signin from "./pages/Signin";
import Userdetail from "./pages/Userdetail";
import Distributor from "./pages/Distributor";
import { PrivateRoute } from "./pages/PrivateRoute";
// Constant.js
export const Retailer = "Retailer";

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [active, setActive] = useState();
console.log(isAuthenticated,"isAuth");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/Distributor" />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/Distributor"
            isAuthenticated={isAuthenticated}
            element={
              // <PrivateRoute isAuthenticated={isAuthenticated}>
                <Distributor isAuthenticated={isAuthenticated} active={active} setActive={setActive} />
            //  </PrivateRoute>
            }
          />
          {/* <Route
            path="/Retailer"
            isAuthenticated={isAuthenticated}
            element={
            //  <PrivateRoute isAuthenticated={isAuthenticated}>
                <Retailer isAuthenticated={isAuthenticated} active={active} setActive={setActive} />
              // </PrivateRoute> 
            }
          /> */}
          <Route
            path="/userdetail"
            isAuthenticated={isAuthenticated}
            element={
             
                <Userdetail isAuthenticated={isAuthenticated} active={active} setActive={setActive} />
           
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
