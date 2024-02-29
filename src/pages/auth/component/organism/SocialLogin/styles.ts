import styled from "@emotion/styled";
import { SocialLoginContainerProps } from "@pages/auth/typings/component/organism.ts";
import { Generators } from "@styles";

export const SocialLoginContainer = styled.div<SocialLoginContainerProps>`
  width: 35rem;
  ${Generators.flexGenerator("row", "center", "center")};

  ${(props) => props.customStyle};
`;
