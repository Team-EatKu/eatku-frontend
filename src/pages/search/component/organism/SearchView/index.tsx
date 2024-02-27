import { SearchViewProps } from "@pages/search/typings/component/organism.ts";
import { SearchViewContainer } from "./styles.ts";
import { Icons } from "@styles";
import { Tags, TextView } from "@molecule/index.tsx";
import { SearchCard } from "@organism/index.tsx";

const SearchView = ({
  className = "",
  customStyle,
  ...props
}: SearchViewProps) => {
  return (
    <SearchViewContainer
      className={`search-view ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="search-view__header">
        <TextView
          text={"검색결과"}
          icon={Icons.manage_search}
          iconSize={"3.2rem"}
        />
        <Tags
          tags={["정확도순", "거리순", "별점높은순", "리뷰많은순"]}
          variant={"default"}
        />
      </div>
      <div className="search-view__content">
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </SearchViewContainer>
  );
};

export default SearchView;
