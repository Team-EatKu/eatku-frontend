import { TagProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { TagContainer } from "./styles.ts";
import Icon from "@atom/Icon";

const Tag = ({
  label,
  icon,
  isActive,
  variant = "default",
  onClick = () => {},
  className = "",
  customStyle = css``,
  ...props
}: TagProps) => {
  return (
    <TagContainer
      onClick={onClick}
      variant={isActive ? "active" : variant}
      className={`tag ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <span>{label}</span>
      {icon && <Icon icon={icon} size={"2.2rem"} />}
    </TagContainer>
  );
};

export default Tag;
