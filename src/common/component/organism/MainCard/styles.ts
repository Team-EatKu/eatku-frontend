import styled from "@emotion/styled";
import { MainCardContainerProps } from "@typings/common/organism.ts";
import { Colors, Generators } from "@styles";

export const MainCardContainer = styled.div<MainCardContainerProps>`
  width: 24rem;
  height: 32rem;
  ${Generators.flexGenerator("column", "flex-start", "flex-start")};
  padding: 2rem;
  gap: 1rem;
  border: 0.05rem solid ${Colors.LightGray};
  border-radius: 1rem;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);

  & > div.main-card__name {
    ${Generators.fontGenerator("2.4rem", "500", "2.8rem")};
  }

  ${(props) => props.customStyle};
`;
