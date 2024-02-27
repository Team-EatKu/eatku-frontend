import styled from "@emotion/styled";
import { TitleContainerProps } from "@pages/main/typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const TitleContainer = styled.div<TitleContainerProps>`
  ${Generators.flexGenerator("column", "flex-start", "center")};
  gap: 1rem;
  margin-top: 7rem;
  margin-bottom: 2rem;

  & > div.title__text {
    ${Generators.fontGenerator("3.6rem", "300", "4.2rem")};

    & > span {
      color: ${Colors.White};
    }

    & > span.title__lectureBuilding {
      font-weight: 600;
    }
  }

  & > div.title__base-location {
    ${Generators.fontGenerator("1.6rem", "300", "1.9rem")};
    color: ${Colors.White};
  }

  ${(props) => props.customStyle};
`;
