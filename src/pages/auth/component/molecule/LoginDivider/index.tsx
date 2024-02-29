import { LoginDividerProps } from "@pages/auth/typings/component/molecule.ts";
import { LoginDividerContainer } from "./styles.ts";

const LoginDivider = ({
  className = "",
  customStyle,
  ...props
}: LoginDividerProps) => {
  return (
    <LoginDividerContainer
      className={`login-divider ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="login-divider__line"></div>
      <div className="login-divider__text">or</div>
      <div className="login-divider__line"></div>
    </LoginDividerContainer>
  );
};

export default LoginDivider;
