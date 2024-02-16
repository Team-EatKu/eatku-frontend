import { InfoProps } from "../../../typings/component/organism.ts";
import { InfoContainer } from "./styles.ts";
import { Image } from "@atom/index.tsx";
import { Rating, Tags } from "@molecule/index.tsx";
import { RestaurantAction } from "../../organism/index.ts";

const temp_restaurant = {
  name: "코코도리",
  location: "서울 광진구 광나루로26길 17",
  information: "",
  imageUrls: [],
  averageScope: 4.5,
  latitude: 35.9078,
  longitude: 127.7669,
  startTime: "11:00",
  endTime: "22:00",
  profileImageUrl: "https://placehold.co/290x290",
  menuList: [
    {
      id: 1,
      restaurant: "코코도리",
      name: "규동",
      price: 6000,
    },
    {
      id: 2,
      restaurant: "코코도리",
      name: "가츠동",
      price: 7000,
    },
    {
      id: 3,
      restaurant: "코코도리",
      name: "사케동",
      price: 10000,
    },
    {
      id: 4,
      restaurant: "코코도리",
      name: "오야꼬동",
      price: 12000,
    },
  ],
  categoryList: ["한식", "일식", "주점"],
  reiviewList: {},
  hashtagList: ["#후문", "#혼밥", "#밥약"],
};
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
