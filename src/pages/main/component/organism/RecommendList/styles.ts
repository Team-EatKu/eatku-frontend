import styled from "@emotion/styled";
import { RecommendListContainerProps } from "@pages/main/typings/component/organism.ts";
import { Generators } from "@styles";

export const RecommendListContainer = styled.div<RecommendListContainerProps>`
  ${Generators.flexGenerator("column", "flex-start")};
  gap: 2rem;
  width: 92rem;

  & > div.recommend-list__title {
    ${Generators.fontGenerator("2.4rem", "400", "2.8rem")};
  }

  & > div.recommend-list__content {
    width: 100%;
    ${Generators.flexGenerator("row", "flex-start")};
    gap: 2rem;
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }

  ${(props) => props.customStyle};
`;
