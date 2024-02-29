import { NicknameStepProps } from "@pages/auth/typings/component/organism.ts";
import { NicknameStepContainer } from "./styles.ts";

import { Button, Input } from "@atom/index.tsx";

const NicknameStep = ({
  params,
  onChangeParams,
  handleClickButton,
  className = "",
  customStyle,
  ...props
}: NicknameStepProps) => {
  return (
    <NicknameStepContainer
      className={`nickName-step ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <Input
        value={params.nickName}
        onChange={(e) => onChangeParams("nickName", e.target.value)}
        placeholder={"닉네임"}
      />
      <Button label={"계속하기"} onClick={handleClickButton} />
    </NicknameStepContainer>
  );
};

export default NicknameStep;
