import styled from "@emotion/styled";
import { StarsContainerProps } from "@typings/common/atom.ts";
import { Generators } from "@styles";

export const StarsContainer = styled.div<StarsContainerProps>`
  ${Generators.flexGenerator("row", "flex-start", "center")};
  gap: 0.3rem;

  ${(props) => props.customStyle}
`;
