import { DetailProps } from "@pages/detail/typings/component/organism.ts";
import { DetailContainer } from "./styles.ts";
import { Map } from "@atom/index.tsx";
import { TextView } from "@molecule/index.tsx";

import { temp_restaurant } from "../../../data.ts";
import { Icons } from "@styles"; // 삭제 예정

const Detail = ({ className, customStyle, ...props }: DetailProps) => {
  return (
    <DetailContainer
      className={`detail__detail ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <TextView
        text={"상세정보"}
        icon={Icons.info}
        iconSize={"3.2rem"}
        className={"detail__title"}
      />
      <TextView
        text={temp_restaurant.phoneNumber}
        iconSize={"2.8rem"}
        icon={Icons.call}
        className={"detail__text-view"}
      />
      <TextView
        text={`${temp_restaurant.startTime} ~ ${temp_restaurant.endTime}`}
        iconSize={"2.8rem"}
        icon={Icons.schedule}
        className={"detail__text-view"}
      />
      <TextView
        text={temp_restaurant.information.split("/")}
        iconSize={"2.8rem"}
        icon={Icons.check}
        className={"detail__text-view"}
      />
      <TextView
        text={temp_restaurant.location}
        iconSize={"2.8rem"}
        icon={Icons.location_on}
        className={"detail__text-view"}
      />
      <div className="detail__near-building">
        {temp_restaurant.lectureBuilding.map((building, index) => (
          <span key={index}>
            <span className="detail__building-name">{building}</span>
            {index < temp_restaurant.lectureBuilding.length - 1
              ? ", "
              : "에서 가까워요."}
          </span>
        ))}
      </div>
      <Map />
    </DetailContainer>
  );
};

export default Detail;
