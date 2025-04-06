import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import UserList from "./pages/users";
import AppLayout from "./components/AppLayout";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
