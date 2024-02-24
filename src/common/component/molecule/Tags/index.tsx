import { TagsProps } from "@typings/common/molecule.ts";
import { TagsContainer } from "./styles.ts";
import { Tag } from "@atom/index.tsx";

const Tags = ({
  tags = [],
  variant = "default",
  size = "medium",
  className,
  customStyle,
  ...props
}: TagsProps) => {
  return (
    <TagsContainer
      className={`tags ${className}`}
      customStyle={customStyle}
      {...props}
    >
      {tags.map((tag) => {
        return (
          <Tag
            label={tag}
            isActive={false}
            variant={variant}
            size={size}
            onClick={() => {}}
          />
        );
      })}
    </TagsContainer>
  );
};

export default Tags;
