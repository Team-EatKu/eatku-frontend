import { SearchCardProps } from "@typings/common/organism.ts";
import { SearchCardContainer } from "./styles.ts";
import { Image } from "@atom/index.tsx";
import { Rating, Tags } from "@molecule/index.tsx";

const SearchCard = ({ className, customStyle, ...props }: SearchCardProps) => {
  return (
    <SearchCardContainer
      className={`search-card ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="search-card__image">
        <Image src={"https://placehold.co/130"} width={"13rem"} />
      </div>
      <div className="search-card__content">
        <div className="search-card__name">코코도리</div>
        <div className="search-card__category">일식집</div>
        <Rating current={"4.5"} />
        <Tags tags={["#후문", "#혼밥", "#밥약"]} variant={"hashtag"} />
      </div>
    </SearchCardContainer>
  );
};

export default SearchCard;
