import styled from "@emotion/styled";
import { SignUpHeaderContainerProps } from "@pages/auth/typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const SignUpHeaderContainer = styled.div<SignUpHeaderContainerProps>`
  width: 35rem;
  ${Generators.flexGenerator("column", "flex-start", "center")};
  gap: 2rem;
  background-color: ${Colors.White};
  overflow-wrap: break-word;
  word-break: keep-all;

  & > div.sign-up-header__title {
    ${Generators.fontGenerator("3.6rem", "400")};
  }

  & > div.sign-up-header__welcome {
    ${Generators.fontGenerator("1.6rem", "300")};
  }

  ${(props) => props.customStyle};
`;
