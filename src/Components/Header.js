import React from "react";
import headerStyle from "./Header.module.css";
import { Link } from "react-router-dom";
import LogoDogs from "../Assets/dogs.svg";

function Header() {
  return (
    <header className={headerStyle.header}>
      <nav className={`${headerStyle.nav} container`}>
        <Link className={headerStyle.logo} to="/">
          <img src={LogoDogs} alt="Logo do Site" />
        </Link>
        <Link className={headerStyle.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}

export default Header;
