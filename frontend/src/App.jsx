import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navData } from "./data/navData";
import Layout from "./components/Layout";
import LayoutAdmin from "./components/LayoutAdmin";
import { navDataAdmin } from "./data/navAdmin";
import { navDataLogin } from "./data/navLogin";
import LayoutLogin from './components/LayoutLogin';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navData.map((item) => (
            <Route key={item.link} path={item.link} element={item.element} />
          ))}
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          {navDataAdmin.map((item) => (
            <Route key={item.link} path={item.link} element={item.element} />
          ))}
        </Route>
        <Route path="/login" element={<LayoutLogin />}>
          {navDataLogin.map((item) => (
            <Route key={item.link} path={item.link} element={item.element} />
          ))}
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
