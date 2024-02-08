import { ButtonContainer } from "./styles";
import { css } from "@emotion/react";
import { ButtonProps } from "@typings/common/atom.ts";
import Icon from "@atom/Icon";

const Button = ({
  className = "",
  customStyle = css``,
  label,
  variant = "primary",
  size = "medium",
  leftIcon,
  rightIcon,
  onClick = () => {},
}: ButtonProps) => {
  const iconSize =
    size === "small" ? "2.0rem" : size === "large" ? "2.8rem" : "2.4rem";
  return (
    <ButtonContainer
      className={className}
      customStyle={customStyle}
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={onClick}
    >
      {leftIcon && <Icon icon={leftIcon} size={iconSize} />}
      {label}
      {rightIcon && <Icon icon={rightIcon} size={iconSize} />}
    </ButtonContainer>
  );
};

export default Button;
