import styled from "@emotion/styled";
import { FilterContainerProps } from "@typings/common/organism.ts";
import { Colors, Generators } from "@styles";

export const FilterContainer = styled.div<FilterContainerProps>`
  ${Generators.flexGenerator("column", "flex-start", "flex-start")};
  gap: 1.5rem;
  width: 102.4rem;
  padding: 3rem 5rem;
  border-radius: 1rem;
  background-color: ${Colors.White};

  & > div.filter__header {
    width: 100%;
    ${Generators.flexGenerator("row", "space-between", "center")};
    cursor: pointer;

    & > div.filter__title {
      & > span.tune-icon {
        color: ${Colors.Primary01};
        font-weight: 200;
      }

      & > div.text {
        ${Generators.fontGenerator("2.4rem", "400", "3.2rem")};
        color: ${Colors.Black};
      }
    }

    & > div.filter__toggle {
      ${Generators.flexGenerator("row", "center", "center")};
      gap: 0;

      & > span.icon {
        color: ${Colors.Gray};
        font-weight: 200;
      }

      & > div.text {
        ${Generators.fontGenerator("1.6rem", "300", "1.9rem")};
        color: ${Colors.Gray};
      }
    }
  }

  & div.filter__content {
    ${Generators.flexGenerator("column", "flex-start", "flex-start")};
    gap: 1.5rem;
  }

  ${(props) => props.customStyle};
`;
