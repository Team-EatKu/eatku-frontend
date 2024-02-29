import { CodeStepProps } from "@pages/auth/typings/component/organism.ts";
import { CodeStepContainer } from "./styles.ts";

import { Button, Input } from "@atom/index.tsx";

const CodeStep = ({
  params,
  onChangeParams,
  handleClickButton,
  className = "",
  customStyle,
  ...props
}: CodeStepProps) => {
  return (
    <CodeStepContainer
      className={`code-step ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <Input
        value={params.code}
        onChange={(e) => onChangeParams("code", e.target.value)}
        placeholder={"인증코드"}
      />
      <Button label={"계속하기"} onClick={handleClickButton} />
    </CodeStepContainer>
  );
};

export default CodeStep;
