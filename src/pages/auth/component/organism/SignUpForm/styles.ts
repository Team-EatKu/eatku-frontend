import styled from "@emotion/styled";
import { SignUpFormContainerProps } from "@pages/auth/typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const SignUpFormContainer = styled.div<SignUpFormContainerProps>`
  width: 35rem;
  ${Generators.flexGenerator("column", "flex-start", "center")};
  gap: 2rem;
  background-color: ${Colors.White};

  & > div.sign-up-form__email {
    width: 100%;
  }

  ${(props) => props.customStyle};
`;
