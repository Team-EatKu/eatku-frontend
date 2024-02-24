import { FilterRowProps } from "@typings/common/molecule.ts";
import { FilterRowContainer } from "./styles.ts";
import { Tags } from "@molecule/index.tsx";

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
      <Tags tags={tags} variant={"default"} />
    </FilterRowContainer>
  );
};

export default FilterRow;
