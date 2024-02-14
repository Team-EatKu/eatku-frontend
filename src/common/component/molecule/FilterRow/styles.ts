import styled from "@emotion/styled";
import { FilterRowContainerProps } from "@typings/common/molecule.ts";
import { Generators } from "@styles";

export const FilterRowContainer = styled.div<FilterRowContainerProps>`
  ${Generators.flexGenerator("row", "flex-start", "center")};

  & > div.filter-row__title {
    min-width: 10rem;
    ${Generators.fontGenerator("2rem", "300", "2.4rem")}
  }

  & > div.filter-row__tags {
    ${Generators.flexGenerator("row", "flex-start", "center")};
    gap: 1rem;
  }

  ${(props) => props.customStyle};
`;
