import styled from "@emotion/styled";
import { NicknameStepContainerProps } from "@pages/auth/typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const NicknameStepContainer = styled.div<NicknameStepContainerProps>`
  width: 35rem;
  ${Generators.flexGenerator("column", "flex-start", "center")};
  gap: 2rem;
  background-color: ${Colors.White};

  ${(props) => props.customStyle};
`;
