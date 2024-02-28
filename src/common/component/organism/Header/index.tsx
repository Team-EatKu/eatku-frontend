import { HeaderProps } from "@typings/common/organism.ts";
import { HeaderContainer } from "./styles.ts";
import { Logo } from "@atom/index.tsx";
import { SearchBar, Profile } from "@molecule/index.tsx";
import { useNavigate } from "react-router-dom";

const Header = ({ className = "", customStyle, ...props }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer
      className={`header ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className={"header__logo-wrapper"} onClick={() => navigate("/")}>
        <Logo />
      </div>
      <SearchBar placeholder={"공학관, 혼밥, 쌀국수"} />
      <Profile src={"https://placehold.co/40"} name={"소복이"} />
    </HeaderContainer>
  );
};

export default Header;
