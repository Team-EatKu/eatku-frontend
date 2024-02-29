import styled from "@emotion/styled";
import { SocialLoginIconContainerProps } from "@pages/auth/typings/component/atom.ts";
import { Colors, Generators } from "@styles";

export const SocialLoginIconContainer = styled.div<SocialLoginIconContainerProps>`
  width: 35rem;
  ${Generators.flexGenerator("row", "center", "center")};
  gap: 2rem;
  background-color: ${Colors.White};

  ${(props) => props.customStyle};
`;
