import { ImageProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { ImageContainer } from "./styles.ts";

const Image = ({
  src = "https://placehold.co/200",
  variant = "default",
  width = "20rem",
  height,
  aspectRatio = "1",
  className = "",
  customStyle = css``,
  ...props
}: ImageProps) => {
  return (
    <ImageContainer
      src={src}
      variant={variant}
      width={width}
      height={height}
      aspectRatio={aspectRatio}
      className={`image ${className}`}
      customStyle={customStyle}
      {...props}
    ></ImageContainer>
  );
};

export default Image;
