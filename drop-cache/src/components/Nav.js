import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import Collections from "../Pages/Collections";
import About from "../Pages/About";
import Settings from "../Pages/Settings"


function Nav() {
  return (
    <BrowserRouter>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "green" : "red",
        })}
      >
        Drop Cache
      </NavLink>
      <NavLink
        to="/collections"
        style={({ isActive }) => ({
          color: isActive ? "green" : "red",
        })}
      >
        Collections
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "green" : "red",
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/settings"
        style={({ isActive }) => ({
          color: isActive ? "green" : "red",
        })}
      >
        Settings
      </NavLink>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/collections" element={<Collections />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Nav;
