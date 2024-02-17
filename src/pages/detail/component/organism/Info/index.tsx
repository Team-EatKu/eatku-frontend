import { InfoProps } from "@pages/detail/typings/component/organism.ts";
import { InfoContainer } from "./styles.ts";
import { Image } from "@atom/index.tsx";
import { Rating, Tags } from "@molecule/index.tsx";
import { RestaurantAction } from "@pages/detail/component/organism/index.ts";

import { temp_restaurant } from "../../../data.ts";

const Info = ({ className, customStyle, ...props }: InfoProps) => {
  return (
    <InfoContainer
      className={`detail__info ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="info__left">
        <Image
          src={temp_restaurant.profileImageUrl}
          width={"29rem"}
          variant={"card"}
        />
      </div>
      <div className="info__right">
        <div className="info__content">
          <div className="info__name">{temp_restaurant.name}</div>
          <div className="info__category">
            {temp_restaurant.categoryList.join(", ")}
          </div>
          <Rating current={temp_restaurant.averageScope.toString()} />
          <Tags tags={temp_restaurant.hashtagList} variant={"hashtag"} />
        </div>
        <RestaurantAction />
      </div>
    </InfoContainer>
  );
};

export default Info;
