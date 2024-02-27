import styled from "@emotion/styled";
import { SearchViewContainerProps } from "@pages/search/typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const SearchViewContainer = styled.div<SearchViewContainerProps>`
  background-color: ${Colors.White};
  ${Generators.flexGenerator("column", "flex-start")};
  gap: 2rem;
  width: 102.4rem;
  min-height: calc(100vh - 40rem);
  border-radius: 1rem;
  padding: 3rem 5rem;

  & > div.search-view__header {
    width: 100%;
    ${Generators.flexGenerator("row", "space-between", "center")};

    & > div.text-view {
      & > span.manage_search-icon {
        color: ${Colors.Primary01};
        font-weight: 200;
      }

      & > div.text {
        ${Generators.fontGenerator("2.4rem", "400", "3.2rem")};
        color: ${Colors.Black};
      }
    }

    & > div.tags {
      width: auto;
    }
  }

  & > div.search-view__content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
  }

  ${(props) => props.customStyle};
`;
