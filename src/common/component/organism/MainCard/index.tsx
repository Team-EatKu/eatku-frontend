import { MainCardProps } from "@typings/common/organism.ts";
import { MainCardContainer } from "./styles.ts";
import { Image } from "@atom/index.tsx";
import { Tags } from "@molecule/index.tsx";

const MainCard = ({ className = "", customStyle, ...props }: MainCardProps) => {
  return (
    <MainCardContainer
      className={`main-card ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <Image src={"https://placehold.co/130"} />
      <Tags
        tags={["#후문", "#혼밥", "#밥약", "#후문", "#혼밥", "#밥약"]}
        variant={"hashtag"}
        size={"small"}
      />
      <div className="main-card__name">코코도리</div>
    </MainCardContainer>
  );
};

export default MainCard;
