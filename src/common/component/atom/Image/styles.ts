import styled from "@emotion/styled";
import { ImageContainerProps } from "@typings/common/atom.ts";

export const ImageContainer = styled.img<ImageContainerProps>`
  object-fit: cover;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  aspect-ratio: ${(props) => props.aspectRatio};
  ${(props) => props.customStyle}
`;
