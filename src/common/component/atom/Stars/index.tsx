import { StarsProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { StarsContainer } from "./styles.ts";
import { Image } from "@atom/index.tsx";
import star from "@img/icon/star.svg";

const Stars = ({
  rate,
  size = "2rem",
  className = "",
  customStyle = css``,
  ...props
}: StarsProps) => {
  const elements = Array.from({ length: rate }, (_, index) => index);

  return (
    <StarsContainer
      className={`stars ${className}`}
      customStyle={customStyle}
      {...props}
    >
      {elements.map((_, index) => (
        <Image key={index} src={star} width={size} />
      ))}
    </StarsContainer>
  );
};

export default Stars;
