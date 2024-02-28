import styled from "@emotion/styled";
import { ReviewsContainerProps } from "../../../typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const ReviewsContainer = styled.div<ReviewsContainerProps>`
  ${Generators.flexGenerator("column", "flex-start", "center")};
  width: 102.4rem;
  background-color: ${Colors.White};
  padding: 3rem 4rem;
  border-radius: 1rem;

  & > div.reviews__title {
    margin-bottom: 3rem;
    width: 100%;
    ${Generators.flexGenerator("row", "space-between", "flex-end")};

    & > div.text-view {
      & > span.rate_review-icon {
        color: ${Colors.Primary01};
        font-weight: 200;
      }

      & > div.text {
        ${Generators.fontGenerator("2.4rem", "400", "3.2rem")};
        color: ${Colors.Black};
      }
    }

    & > div.reviews__write {
      ${Generators.fontGenerator("2rem", "300", "2.4rem")};
      color: ${Colors.Primary01};
    }
  }

  & > div.reviews__review {
    width: 100%;
    ${Generators.flexGenerator("column")};
    gap: 5rem;
  }

  & > div.reviews__more {
    ${Generators.fontGenerator("2rem", "300", "2.4rem")};
    color: ${Colors.Primary01};
    margin: 3rem 0;
  }

  ${(props) => props.customStyle};
`;
