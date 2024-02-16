import styled from "@emotion/styled";
import { TagsContainerProps } from "@typings/common/molecule.ts";
import { Generators } from "@styles";

export const TagsContainer = styled.div<TagsContainerProps>`
  ${Generators.flexGenerator("row", "flex-start", "center")};
  gap: 1rem;

  ${(props) => props.customStyle};
`;
