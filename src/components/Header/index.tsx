import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <nav>
        <NavLink to="/" title="Timer" end>
          <Timer />
        </NavLink>
        <NavLink to="history" title="Histórico" end>
          <Scroll />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

