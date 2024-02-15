import styled from "@emotion/styled";
import { HeaderContainerProps } from "@typings/common/organism.ts";
import { Generators } from "@styles";

export const HeaderContainer = styled.div<HeaderContainerProps>`
  ${Generators.flexGenerator("row", "space-between", "center")};
  gap: 2rem;
  margin: 0 10%;
  ${(props) => props.customStyle};
`;
