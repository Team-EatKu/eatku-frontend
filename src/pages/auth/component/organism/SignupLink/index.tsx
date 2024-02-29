import { SignupLinkProps } from "@pages/auth/typings/component/organism.ts";
import { SignupLinkContainer } from "./styles.ts";
import { useNavigate } from "react-router-dom";

const SignupLink = ({
  className = "",
  customStyle,
  ...props
}: SignupLinkProps) => {
  const navigate = useNavigate();
  return (
    <SignupLinkContainer
      className={`signup-link ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="signup-link__text">
        아직 뭐먹을건대 회원이 아니신가요?
      </div>
      <div
        className="signup-link__link"
        onClick={() => navigate("/auth/signup")}
      >
        회원가입
      </div>
    </SignupLinkContainer>
  );
};

export default SignupLink;
