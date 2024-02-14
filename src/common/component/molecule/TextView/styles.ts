import styled from "@emotion/styled";
import { TextViewContainerProps } from "@typings/common/molecule.ts";
import { Generators } from "@styles";

export const TextViewContainer = styled.div<TextViewContainerProps>`
  ${Generators.flexGenerator("row", "flex-start", "flex-start")};
  gap: 1rem;
  ${(props) => props.customStyle};
`;
