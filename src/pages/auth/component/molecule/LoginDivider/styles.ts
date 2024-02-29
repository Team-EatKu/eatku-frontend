import styled from "@emotion/styled";
import { LoginDividerContainerProps } from "@pages/auth/typings/component/molecule.ts";
import { Colors, Generators } from "@styles";

export const LoginDividerContainer = styled.div<LoginDividerContainerProps>`
  width: 35rem;
  ${Generators.flexGenerator("row", "center", "center")};
  gap: 2rem;
  background-color: ${Colors.White};

  & > div.login-divider__line {
    width: 13rem;
    border: 0.05rem solid ${Colors.LightGray};
  }

  & > div.login-divider__text {
    ${Generators.fontGenerator("1.4rem", "300")};
  }

  ${(props) => props.customStyle};
`;
