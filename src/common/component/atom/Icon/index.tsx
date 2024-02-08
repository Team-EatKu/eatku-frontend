import { IconProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { IconContainer } from "./styles.ts";
import { Colors } from "@styles";

const Icon = ({
  icon,
  size = "2.4rem",
  color = Colors.Black,
  className = "",
  customStyle = css``,
}: IconProps) => {
  return (
    <IconContainer
      size={size}
      color={color}
      className={`icon ${icon.name}-icon ${icon.className} ${className}`}
      customStyle={customStyle}
    >
      {icon.name}
    </IconContainer>
  );
};

export default Icon;
