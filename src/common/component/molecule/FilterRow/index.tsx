import { FilterRowProps } from "@typings/common/molecule.ts";
import { FilterRowContainer } from "./styles.ts";
import { Tag } from "@atom/index.tsx";

const FilterRow = ({
  label,
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
      <div className="filter-row__title">{label}</div>
      <div className="filter-row__tags">
        {tags.map((tag) => {
          return (
            <Tag
              label={tag}
              isActive={false}
              variant={"default"}
              onClick={() => {}}
            />
          );
        })}
      </div>
    </FilterRowContainer>
  );
};

export default FilterRow;
