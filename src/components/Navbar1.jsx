// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar" style={styles.navbar}>
      <div style={styles.brand}>
        <NavLink to="/" style={styles.brandLink}>BlogVerse</NavLink>
      </div>

      <div style={styles.links}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...styles.link,
            color: isActive ? "white" : "#cbd5e1",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/bloglist"
          style={({ isActive }) => ({
            ...styles.link,
            color: isActive ? "white" : "#cbd5e1",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
        >
          Blogs
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            ...styles.link,
            color: isActive ? "white" : "#cbd5e1",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 1rem",
    background: "#4D27F5",
    color: "white",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },
  brand: { fontSize: "1.125rem", fontWeight: 600 },
  brandLink: { color: "white", textDecoration: "none" },
  links: { display: "flex", gap: "0.75rem" },
  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    paddingBottom: "4px",
    transition: "color 0.3s, border-bottom 0.3s",
  },
};
