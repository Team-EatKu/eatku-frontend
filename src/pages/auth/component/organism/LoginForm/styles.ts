import styled from "@emotion/styled";
import { LoginFormContainerProps } from "@pages/auth/typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const LoginFormContainer = styled.div<LoginFormContainerProps>`
  width: 35rem;
  ${Generators.flexGenerator("column", "flex-start", "center")};
  gap: 2.4rem;
  background-color: ${Colors.White};
  margin-top: 5rem;

  & > div.login-form__title {
    ${Generators.fontGenerator("3.2rem", "400")};
  }

  & > div.login-form__welcome {
    ${Generators.fontGenerator("1.6rem", "300")};
  }

  ${(props) => props.customStyle};
`;
