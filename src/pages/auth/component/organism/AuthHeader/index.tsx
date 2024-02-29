import { AuthHeaderProps } from "@pages/auth/typings/component/organism.ts";
import { AuthHeaderContainer } from "./styles.ts";
import { Logo } from "@atom/index.tsx";
import { useNavigate } from "react-router-dom";

const AuthHeader = ({
  className = "",
  customStyle,
  ...props
}: AuthHeaderProps) => {
  const navigate = useNavigate();
  return (
    <AuthHeaderContainer
      className={`auth-header ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className={"header__logo-wrapper"} onClick={() => navigate("/")}>
        <Logo />
      </div>
    </AuthHeaderContainer>
  );
};

export default AuthHeader;
