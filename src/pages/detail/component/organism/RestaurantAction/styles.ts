import styled from "@emotion/styled";
import { RestaurantActionContainerProps } from "../../../typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const RestaurantActionContainer = styled.div<RestaurantActionContainerProps>`
  ${Generators.flexGenerator("row", "space-around")};
  padding: 1.3rem 0;
  width: 51.8rem;
  height: 4.8rem;
  border: 0.05rem solid ${Colors.Gray};
  border-radius: 2.4rem;
  background-color: ${Colors.White};

  & > div.text-view {
    width: 33%;
    ${Generators.flexGenerator()};
    border-right: 0.05rem solid ${Colors.Gray};

    & > span.icon {
      color: ${Colors.Primary01};
      font-weight: 200;
    }
  }

  & > div.text-view:last-of-type {
    border-right: none;
  }

  ${(props) => props.customStyle};
`;
