import styled from "@emotion/styled";
import { MenuContainerProps } from "@pages/detail/typings/component/molecule.ts";
import { Colors, Generators } from "@styles";

export const MenuContainer = styled.div<MenuContainerProps>`
  ${Generators.flexGenerator("row", "space-between", "center")};
  width: 100%;

  & > div.menu__name {
    ${Generators.fontGenerator("2rem", "300", "2.4rem")};
    color: ${Colors.Gray};
  }

  & > div.menu__line {
    width: 30rem;
    border-top: 0.07rem solid ${Colors.LightGray};
  }

  & > div.menu__price {
    ${Generators.fontGenerator("2rem", "300", "2.4rem")};
    color: ${Colors.Gray};
  }

  ${(props) => props.customStyle};
`;
