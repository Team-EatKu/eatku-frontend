import styled from "@emotion/styled";
import { ReviewContainerProps } from "../../../typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const ReviewContainer = styled.div<ReviewContainerProps>`
  width: 100%;

  & > div.review__header {
    width: 100%;
    ${Generators.flexGenerator("row", "space-between", " flex-end")};

    & > div.review__date {
      ${Generators.fontGenerator("1.6rem", "300", "1.9rem")};
      color: ${Colors.Gray};
    }

    margin-bottom: 2rem;
  }

  & > div.review__content {
    ${Generators.fontGenerator("2rem", "300", "2.4rem")};
    color: ${Colors.Gray};
    white-space: pre-line;
  }

  ${(props) => props.customStyle};
`;
