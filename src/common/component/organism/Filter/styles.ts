import styled from "@emotion/styled";
import { FilterContainerProps } from "@typings/common/organism.ts";
import { Generators } from "@styles";

export const FilterContainer = styled.div<FilterContainerProps>`
  ${Generators.flexGenerator("column", "flex-start", "flex-start")};
  gap: 1.5rem;
  ${(props) => props.customStyle};
`;
