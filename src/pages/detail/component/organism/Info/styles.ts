import styled from "@emotion/styled";
import { InfoContainerProps } from "../../../typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const InfoContainer = styled.div<InfoContainerProps>`
  width: 124rem;
  height: 37rem;
  background-color: ${Colors.White};
  ${(props) => props.customStyle};
`;
