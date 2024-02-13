import styled from "@emotion/styled";
import { RatingContainerProps } from "@typings/common/molecule.ts";
import { Colors, Generators } from "@styles";

export const RatingContainer = styled.div<RatingContainerProps>`
  width: 8.6rem;
  height: 2.8rem;
  ${Generators.flexGenerator("row", "space-between", "center")};

  & > div.rating__score {
    height: 100%;
    margin-bottom: 0.5rem;
    ${Generators.flexGenerator("row", "flex-end", "flex-end")};

    & > div.rating__current {
      ${Generators.fontGenerator("2.4rem", "300", "2rem")};
      color: ${Colors.Black};
    }

    & > div.rating__max {
      ${Generators.fontGenerator("1.5rem", "300", "1.5rem")};
      color: ${Colors.Gray};
    }
  }

  ${(props) => props.customStyle};
`;
