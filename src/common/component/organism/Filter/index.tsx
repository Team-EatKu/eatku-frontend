import { FilterProps } from "@typings/common/organism.ts";
import { FilterContainer } from "./styles.ts";
import { FilterRow } from "@molecule/index.tsx";
import { filterConfig } from "./config.ts";

const Filter = ({ className, customStyle, ...props }: FilterProps) => {
  return (
    <FilterContainer
      className={`filter ${className}`}
      customStyle={customStyle}
      {...props}
    >
      {filterConfig.map((row) => {
        return <FilterRow label={row.label} tags={row.list} />;
      })}
    </FilterContainer>
  );
};

export default Filter;
