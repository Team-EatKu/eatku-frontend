import styled from "@emotion/styled";
import { HeaderContainerProps } from "@typings/common/organism.ts";
import { Colors, Generators } from "@styles";

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  ${Generators.flexGenerator("row", "space-between", "center")};
  gap: 2rem;
  padding: 2rem 10%;
  background-color: ${Colors.White};

  & > div.header__logo-wrapper {
    cursor: pointer;
  }

  ${(props) => props.customStyle};
`;
