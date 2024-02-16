import { InfoProps } from "../../../typings/component/organism.ts";
import { InfoContainer } from "./styles.ts";
import { Image } from "@atom/index.tsx";
import { Rating, Tags } from "@molecule/index.tsx";

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
  profileImageUrl: "",
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
  hashtagList: ["후문", "혼밥", "밥약"],
};
const Info = ({ className, customStyle, ...props }: InfoProps) => {
  return (
    <InfoContainer
      className={`detail__info ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="info__image">
        <Image src={"https://placehold.co/290x290"} />
      </div>
      <div className="info__content">
        <div className="info__top">
          <div className="info__name"></div>
          <div className="info__category"></div>
        </div>
        <div className="info__bottom">
          <Rating current={temp_restaurant.averageScope.toString()} />
          <Tags tags={temp_restaurant.hashtagList} />
        </div>
      </div>
    </InfoContainer>
  );
};

export default Info;
