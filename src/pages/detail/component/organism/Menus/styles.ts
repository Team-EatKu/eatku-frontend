import styled from "@emotion/styled";
import { MenusContainerProps } from "../../../typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const MenusContainer = styled.div<MenusContainerProps>`
  ${Generators.flexGenerator("column", "flex-start", "flex-start")};
  width: 102.4rem;
  background-color: ${Colors.White};
  padding: 3rem 4rem;
  border-radius: 1rem;

  & > div.menus__title {
    & > div.text-view {
      & > span.room_service-icon {
        color: ${Colors.Primary01};
        font-weight: 200;
      }

      & > div.text {
        ${Generators.fontGenerator("2.4rem", "400", "3.2rem")};
        color: ${Colors.Black};
      }
    }
  }

  & > div.menus__menu {
    ${Generators.flexGenerator("column", "flex-start", "center")};
    gap: 1rem;
    width: 100%;
    margin-top: 1.5rem;
  }

  ${(props) => props.customStyle};
`;
