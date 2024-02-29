import styled from "@emotion/styled";
import { LoginLinkContainerProps } from "@pages/auth/typings/component/molecule.ts";
import { Colors, Generators } from "@styles";

export const LoginLinkContainer = styled.div<LoginLinkContainerProps>`
  width: 35rem;
  ${Generators.flexGenerator("row", "center", "center")};
  gap: 0.5rem;
  margin-top: 3rem;

  & > div.login-link__text {
    ${Generators.fontGenerator("1.4rem", "300")};
  }

  & > div.login-link__link {
    ${Generators.fontGenerator("1.4rem", "300")};
    color: ${Colors.GrayGreen};
    cursor: pointer;
  }

  ${(props) => props.customStyle};
`;
