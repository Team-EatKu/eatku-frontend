import { LoginFormProps } from "@pages/auth/typings/component/organism.ts";
import { LoginFormContainer } from "./styles.ts";
import { Button, Input } from "@atom/index.tsx";

const LoginForm = ({
  handleClickLogin,
  className = "",
  customStyle,
  ...props
}: LoginFormProps) => {
  return (
    <LoginFormContainer
      className={`login-form ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="login-form__title">로그인</div>
      <div className="login-form__welcome">
        광진구 1등 맛집 사이트에 오신 것을 환영합니다.
      </div>
      <Input
        className={"login-form__email"}
        placeholder={"이메일 주소"}
        type={"email"}
      />
      <Input
        className={"login-form__password"}
        placeholder={"비밀번호"}
        type={"password"}
      />
      <Button label={"로그인"} onClick={handleClickLogin} />
    </LoginFormContainer>
  );
};

export default LoginForm;
