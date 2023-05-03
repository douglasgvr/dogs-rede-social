import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatistica } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <nav className={styles.nav}>
      <NavLink end to="/conta">
        {" "}
        <MinhasFotos /> {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatistica">
        {" "}
        <Estatistica /> {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        {" "}
        <AdicionarFoto /> {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={handleLogout}>
        {" "}
        <Sair /> {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;