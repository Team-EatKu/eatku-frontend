import { LoginContainer } from "./styles.ts";
import {
  AuthHeader,
  LoginForm,
  SignupLink,
  SocialLogin,
} from "@pages/auth/component/organism/index.ts";
import { LoginDivider } from "@pages/auth/component/molecule/index.ts";
import { useAuthLogin } from "@pages/auth/hooks/index.ts";

const Index = () => {
  const { handleClickLogin } = useAuthLogin();
  return (
    <LoginContainer>
      <AuthHeader />
      <LoginForm handleClickLogin={handleClickLogin} />
      <LoginDivider />
      <SocialLogin />
      <SignupLink />
    </LoginContainer>
  );
};

export default Index;
