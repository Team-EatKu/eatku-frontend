import styled from "@emotion/styled";
import { InfoContainerProps } from "../../../typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const InfoContainer = styled.div<InfoContainerProps>`
  ${Generators.flexGenerator("row", "flex-start")};
  gap: 3rem;
  width: 102.4rem;
  height: 37rem;
  padding: 3rem 4rem;
  background-color: ${Colors.White};
  border-radius: 1rem;

  & > div.info__right {
    height: 100%;
    ${Generators.flexGenerator("column", "space-between", "flex-start")};
    padding: 1.5rem 0;

    & > div.info__content {
      ${Generators.flexGenerator("column", "flex-start", "flex-start")};
      gap: 1.8rem;

      & > div.info__name {
        ${Generators.fontGenerator("4rem", "500", "4.7rem")};
      }

      & > div.info__category {
        ${Generators.fontGenerator("2rem", "300", "2.4rem")};
        color: ${Colors.GrayGreen};
      }
    }
  }

  ${(props) => props.customStyle};
`;
