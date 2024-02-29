import styled from "@emotion/styled";
import {LoginFormContainerProps} from "@pages/auth/typings/component/organism.ts";
import {Colors, Generators} from "@styles";

export const SignupLinkContainer = styled.div<LoginFormContainerProps>`
  width: 35rem;
  ${Generators.flexGenerator("row", "center", "center")};
  gap: 0.5rem;
  margin-top: 3rem;

  & > div.signup-link__text {
    ${Generators.fontGenerator("1.4rem", "300")};
  }

  & > div.signup-link__link {
    ${Generators.fontGenerator("1.4rem", "300")};
    color: ${Colors.GrayGreen};
    cursor: pointer;
  }

  ${(props) => props.customStyle};
`;
