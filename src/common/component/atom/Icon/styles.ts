import styled from "@emotion/styled";
import { IconContainerProps } from "@typings/common/atom.ts";

export const IconContainer = styled.span<IconContainerProps>`
  color: ${(props) => props.color};

  width: ${(props) => props.size};
  height: ${(props) => props.size};
  font-size: ${(props) => props.size};

  ${(props) => props.customStyle}
`;
