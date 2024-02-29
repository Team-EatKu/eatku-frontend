import styled from "@emotion/styled";
import { LoginFormContainerProps } from "@pages/auth/typings/component/organism.ts";
import { Generators } from "@styles";

export const SocialLoginContainer = styled.div<LoginFormContainerProps>`
  width: 35rem;
  ${Generators.flexGenerator("row", "center", "center")};

  ${(props) => props.customStyle};
`;
