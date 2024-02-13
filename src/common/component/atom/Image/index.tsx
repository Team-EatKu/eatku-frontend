import { ImageProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { ImageContainer } from "./styles.ts";

const Image = ({
  src = "https://placehold.co/200",
  width = "20rem",
  height,
  aspectRatio = "1",
  className = "",
  customStyle = css``,
}: ImageProps) => {
  return (
    <ImageContainer
      src={src}
      width={width}
      height={height}
      aspectRatio={aspectRatio}
      className={className}
      customStyle={customStyle}
    ></ImageContainer>
  );
};

export default Image;
