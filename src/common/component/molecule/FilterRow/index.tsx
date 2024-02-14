import { FilterRowProps } from "@typings/common/molecule.ts";
import { FilterRowContainer } from "./styles.ts";
import { Tag } from "@atom/index.tsx";

const FilterRow = ({
  title,
  tags = [],
  className,
  customStyle,
  ...props
}: FilterRowProps) => {
  return (
    <FilterRowContainer
      className={`filter-row ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="filter-row__title">{title}</div>
      <div className="filter-row__tags">
        {tags.map((tag) => {
          return (
            <Tag
              label={tag.label}
              isActive={tag.isActive}
              variant={tag.variant}
              onClick={tag.onClick}
            />
          );
        })}
      </div>
    </FilterRowContainer>
  );
};

export default FilterRow;
