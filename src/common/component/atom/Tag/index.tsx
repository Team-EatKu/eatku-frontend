import { TagProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { TagContainer } from "./styles.ts";
import Icon from "@atom/Icon";

const Tag = ({
  label,
  icon,
  variant,
  onClick = () => {},
  className = "",
  customStyle = css``,
}: TagProps) => {
  return (
    <TagContainer
      className={className}
      onClick={onClick}
      variant={variant}
      customStyle={customStyle}
    >
      <span>{label}</span>
      {icon && <Icon icon={icon} size={"2.2rem"} />}
    </TagContainer>
  );
};

export default Tag;
