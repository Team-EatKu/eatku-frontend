import styled from "@emotion/styled";
import { RecommendViewContainerProps } from "@pages/main/typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const RecommendViewContainer = styled.div<RecommendViewContainerProps>`
  background-color: ${Colors.White};
  ${Generators.flexGenerator("column", "flex-start")};
  gap: 2rem;
  width: 102.4rem;
  border-radius: 1rem;
  padding: 3rem 5rem;

  & > div.recommend-view__header {
    width: 100%;
    ${Generators.flexGenerator("row", "flex-end", "center")};
    gap: 1rem;

    & > div.text-view {
      ${Generators.flexGenerator()};

      border: 0.05rem solid ${Colors.Gray};
      border-radius: 1.5rem;
      padding: 0.5rem 1rem;

      & > span.icon {
        color: ${Colors.Gray};
      }

      & > div.text {
        ${Generators.fontGenerator("1.5rem", "300", "1.8rem")}
        color: ${Colors.Gray};
      }
    }
  }

  & > div.recommend-view__content {
    ${Generators.flexGenerator("column")};
    gap: 7rem;
  }

  ${(props) => props.customStyle};
`;
