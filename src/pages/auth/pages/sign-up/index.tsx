import { LoginContainer } from "./styles.ts";
import {
  AuthHeader,
  SignUpForm,
  SignUpHeader,
} from "@pages/auth/component/organism/index.ts";
import { useAuthSignUp } from "@pages/auth/hooks";

const Index = () => {
  const { step, params, onChangeParams, handleClickButton } = useAuthSignUp();

  return (
    <LoginContainer>
      <AuthHeader />
      <div className="auth__content">
        <SignUpHeader step={step} />
        <SignUpForm
          step={step}
          params={params}
          onChangeParams={onChangeParams}
          handleClickButton={handleClickButton}
        />
      </div>
    </LoginContainer>
  );
};

export default Index;
