import { EmailStepProps } from "@pages/auth/typings/component/organism.ts";
import { EmailStepContainer } from "./styles.ts";

import { Button } from "@atom/index.tsx";

const EmailStep = ({
  handleClickButton,
  className = "",
  customStyle,
  ...props
}: EmailStepProps) => {
  return (
    <EmailStepContainer
      className={`email-step ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <Button label={"계속하기"} onClick={handleClickButton} />
    </EmailStepContainer>
  );
};

export default EmailStep;
