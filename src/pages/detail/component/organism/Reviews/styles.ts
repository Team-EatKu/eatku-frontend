import styled from "@emotion/styled";
import { ReviewsContainerProps } from "../../../typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const ReviewsContainer = styled.div<ReviewsContainerProps>`
  ${Generators.flexGenerator("column", "flex-start", "flex-start")};
  width: 102.4rem;
  background-color: ${Colors.White};
  padding: 3rem 4rem;
  border-radius: 1rem;

  & > div.reviews__title {
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
  }

  ${(props) => props.customStyle};
`;
