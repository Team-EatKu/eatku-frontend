import { FilterProps } from "@typings/common/organism.ts";
import { FilterContainer } from "./styles.ts";
import { FilterRow, TextView } from "@molecule/index.tsx";
import { filterConfig } from "./config.ts";
import { Icons } from "@styles";
import { useState } from "react";

const Filter = ({ className = "", customStyle, ...props }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <FilterContainer
      className={`filter ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div
        className="filter__header"
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        <TextView
          className={"filter__title"}
          text={"필터"}
          icon={Icons.tune}
          iconSize={"3.2rem"}
        />
        <TextView
          className={"filter__toggle"}
          text={isOpen ? "접기" : "펼치기"}
          icon={isOpen ? Icons.arrow_drop_up : Icons.arrow_drop_down}
          iconSize={"3.2rem"}
        />
      </div>
      {isOpen && (
        <div className="filter__content">
          {filterConfig.map((row) => {
            return <FilterRow label={row.label} tags={row.list} />;
          })}
        </div>
      )}
    </FilterContainer>
  );
};

export default Filter;
