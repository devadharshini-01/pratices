import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signin from "./pages/Signin";
import Userdetail from "./pages/Userdetail";
import Distributor from "./pages/Distributor";
import { PrivateRoute } from "./pages/PrivateRoute";
import WorkinProgress from "./pages/WorkinProgress";

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/Distributor" element={<Distributor />} />
          <Route path="/retailer" element={<Distributor />} />
          <Route path="/userdetail" element={<Userdetail />} />
          <Route path="/Dashboard" element={<WorkinProgress />} />
          <Route path="/Exchange" element={<WorkinProgress />} />
          <Route path="/ddOrder" element={<WorkinProgress />} />
          <Route path="/ssfee" element={<WorkinProgress />} />
          <Route path="/Distributor/reports" element={<WorkinProgress />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
