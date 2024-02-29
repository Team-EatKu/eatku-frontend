import { LoginLinkProps } from "@pages/auth/typings/component/molecule.ts";
import { LoginLinkContainer } from "./styles.ts";
import { useNavigate } from "react-router-dom";

const LoginLink = ({
  className = "",
  customStyle,
  ...props
}: LoginLinkProps) => {
  const navigate = useNavigate();
  return (
    <LoginLinkContainer
      className={`login-link ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="login-link__text">이미 계정이 있으신가요?</div>
      <div className="login-link__link" onClick={() => navigate("/auth/login")}>
        로그인
      </div>
    </LoginLinkContainer>
  );
};

export default LoginLink;
