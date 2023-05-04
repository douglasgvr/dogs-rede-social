import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatistica } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setmobileMenu] = React.useState(false)
  const { pathname } = useLocation()

  const navigate = useNavigate();
  React.useEffect(() => {
    setmobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && <button aria-label="Menu"
        onClick={() => setmobileMenu(!mobileMenu)}
        className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}></button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.mobileButtonActive}`}>
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
    </>
  );
};

export default UserHeaderNav;
