import styled from "@emotion/styled";
import { TagsContainerProps } from "@typings/common/molecule.ts";
import { Generators } from "@styles";

export const TagsContainer = styled.div<TagsContainerProps>`
  ${Generators.flexGenerator("row", "flex-start", "center")};
  gap: 1rem;
  width: 100%;
  overflow-x: scroll;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  ${(props) => props.customStyle};
`;
