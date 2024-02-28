import styled from "@emotion/styled";
import { SearchCardContainerProps } from "@typings/common/organism.ts";
import { Colors, Generators } from "@styles";

export const SearchCardContainer = styled.div<SearchCardContainerProps>`
  width: 46rem;
  height: 13rem;
  ${Generators.flexGenerator("row", "flex-start", "center")};
  gap: 1.5rem;

  & > div.search-card__content {
    height: 100%;
    ${Generators.flexGenerator("column", "space-between", "flex-start")};

    & > div.search-card__name {
      ${Generators.fontGenerator("2.4rem", "500", "2.8rem")};
    }

    & > div.search-card__category {
      ${Generators.fontGenerator("1.6rem", "300", "1.9rem")};
      color: ${Colors.GrayGreen};
    }
  }

  ${(props) => props.customStyle};
`;
