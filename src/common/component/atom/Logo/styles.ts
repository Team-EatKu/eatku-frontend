import styled from "@emotion/styled";
import { LogoContainerProps } from "@typings/common/atom.ts";

export const LogoContainer = styled.div<LogoContainerProps>`
  width: ${(props) => props.width};
  min-width: 15.3rem;
`;
