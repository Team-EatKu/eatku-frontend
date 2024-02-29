import { PasswordStepProps } from "@pages/auth/typings/component/organism.ts";
import { PasswordStepContainer } from "./styles.ts";

import { Button, Input } from "@atom/index.tsx";

const PasswordStep = ({
  params,
  onChangeParams,
  handleClickButton,
  className = "",
  customStyle,
  ...props
}: PasswordStepProps) => {
  return (
    <PasswordStepContainer
      className={`password-step ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <Input
        value={params.nickName}
        onChange={(e) => onChangeParams("nickName", e.target.value)}
        placeholder={"닉네임"}
      />
      <Input
        value={params.password}
        onChange={(e) => onChangeParams("password", e.target.value)}
        placeholder={"비밀번호"}
      />
      <Input
        value={params.confirmPassword}
        onChange={(e) => onChangeParams("confirmPassword", e.target.value)}
        placeholder={"비밀번호 확인"}
      />
      <Button label={"계정생성"} onClick={handleClickButton} />
    </PasswordStepContainer>
  );
};

export default PasswordStep;
