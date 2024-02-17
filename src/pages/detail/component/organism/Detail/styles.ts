import styled from "@emotion/styled";
import { DetailContainerProps } from "../../../typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const DetailContainer = styled.div<DetailContainerProps>`
  ${Generators.flexGenerator("column", "flex-start", "flex-start")};
  width: 102.4rem;
  height: 71.1rem;
  background-color: ${Colors.White};
  padding: 3rem 4rem;

  & > div.detail__title {
    margin-bottom: 0.5rem;

    & > span.info-icon {
      color: ${Colors.Primary01};
      font-weight: 200;
    }

    & > div.text {
      ${Generators.fontGenerator("2.4rem", "400", "3.2rem")};
      color: ${Colors.Black};
    }
  }

  & > div.detail__text-view {
    margin-top: 1rem;

    & > span.icon {
      color: ${Colors.GrayGreen};
      font-weight: 200;
    }

    & > div.text {
      ${Generators.fontGenerator("2rem", "300", "2.8rem")};
      color: ${Colors.Gray};
    }
  }

  & > div.detail__near-building {
    margin-left: 3.8rem;
    margin-top: 0.7rem;

    & span {
      ${Generators.fontGenerator("1.6rem", "300", "1.9rem")};
      color: ${Colors.Gray};
    }

    & span.detail__building-name {
      color: ${Colors.Primary01};
    }
  }

  & > div.map {
    margin-top: 2rem;
  }

  ${(props) => props.customStyle};
`;
