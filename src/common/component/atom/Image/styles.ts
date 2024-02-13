import styled from "@emotion/styled";
import { ImageContainerProps } from "@typings/common/atom.ts";
import { CssType } from "@typings/commonType.ts";
import { css } from "@emotion/react";

export const ImageVariants: CssType = {
  default: css`
    border-radius: 0;
  `,
  card: css`
    border-radius: 1rem;
  `,
  profile: css`
    border-radius: 50%;
  `,
};

export const ImageContainer = styled.img<ImageContainerProps>`
  object-fit: cover;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  aspect-ratio: ${(props) => props.aspectRatio};

  ${(props) => props.variant && ImageVariants[props.variant]}

  ${(props) => props.customStyle}
`;
