import { SignUpFormProps } from "@pages/auth/typings/component/organism.ts";
import { SignUpFormContainer } from "./styles.ts";

import { Input } from "@atom/index.tsx";
import { LoginLink } from "@pages/auth/component/molecule/index.ts";
import {
  EmailStep,
  CodeStep,
  NicknameStep,
  PasswordStep,
} from "@pages/auth/component/organism/index.ts";

const SignUpForm = ({
  step,
  params,
  onChangeParams,
  handleClickButton,
  className = "",
  customStyle,
  ...props
}: SignUpFormProps) => {
  return (
    <SignUpFormContainer
      className={`sign-up-form ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="sign-up-form__email">
        <Input
          value={params.email}
          onChange={(e) => onChangeParams("email", e.target.value)}
          placeholder={"이메일 주소"}
        />
      </div>
      <div className="sign-up-form__input">
        {step === "email" ? (
          <EmailStep
            params={params}
            onChangeParams={onChangeParams}
            handleClickButton={handleClickButton}
          />
        ) : step === "code" ? (
          <CodeStep
            params={params}
            onChangeParams={onChangeParams}
            handleClickButton={handleClickButton}
          />
        ) : step === "nickName" ? (
          <NicknameStep
            params={params}
            onChangeParams={onChangeParams}
            handleClickButton={handleClickButton}
          />
        ) : step === "password" ? (
          <PasswordStep
            params={params}
            onChangeParams={onChangeParams}
            handleClickButton={handleClickButton}
          />
        ) : (
          <></>
        )}
      </div>
      <LoginLink />
      <div className="sign-up-form__login-link"></div>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
