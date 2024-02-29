import styled from "@emotion/styled";
import { HeaderContainerProps } from "@typings/common/organism.ts";
import { Colors, Generators } from "@styles";

export const AuthHeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  ${Generators.flexGenerator("row", "flex-start", "center")};
  gap: 2rem;
  padding: 2rem 10%;
  background-color: ${Colors.White};

  & > div.header__logo-wrapper {
    cursor: pointer;
  }

  ${(props) => props.customStyle};
`;
