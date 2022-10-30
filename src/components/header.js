import React from "react";
import "../styles/header.css";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="titre">
        <div>
          <h1
            className="header__title"
            onClick={() => {
              navigate("/");
            }}
          >
            <span className="header__white">Your </span> Sw
            <span className="header__pink">ee</span>ts
          </h1>
        </div>
      </div>

      <nav>
        <ul className="nav-item">
          <li onClick={() => console.log("Home")}>Home</li>
          <li onClick={() => console.log("Catalogue")}>Catalogue</li>
          <li onClick={() => console.log("About")}>About Us</li>
        </ul>
      </nav>

      <div className="panier" onClick={() => navigate("/basket")}>
        <div className="decor-panier">
          <Badge
            badgeContent={4}
            color="secondary"
            sx={{ marginBottom: 1 }}
            className="icone-panier"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="header__icon_panier"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
