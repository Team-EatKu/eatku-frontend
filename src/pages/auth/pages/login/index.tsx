import { LoginContainer } from "./styles.ts";
import {
  AuthHeader,
  LoginForm,
  SignupLink,
  SocialLogin,
} from "@pages/auth/component/organism/index.ts";
import { LoginDivider } from "@pages/auth/component/molecule/index.ts";

const Index = () => {
  return (
    <LoginContainer>
      <AuthHeader />
      <LoginForm />
      <LoginDivider />
      <SocialLogin />
      <SignupLink />
    </LoginContainer>
  );
};

export default Index;
