import { ReviewsProps } from "@pages/detail/typings/component/organism.ts";
import { ReviewsContainer } from "./styles.ts";
import { TextView } from "@molecule/index.tsx";
import { Icons } from "@styles";
import { Review } from "@pages/detail/component/organism";

import { temp_restaurant } from "../../../data.ts";

const Reviews = ({ className, customStyle, ...props }: ReviewsProps) => {
  return (
    <ReviewsContainer
      className={`reviews ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="reviews__title">
        <TextView text={"리뷰"} icon={Icons.rate_review} iconSize={"3.2rem"} />
        <div className="reviews__write">리뷰쓰기</div>
      </div>
      <div className="reviews__review">
        {temp_restaurant.reviewList.map((review) => (
          <Review data={review} />
        ))}
      </div>
      <div className="reviews__more">{`${"15"}개의 리뷰 전체보기`}</div>
    </ReviewsContainer>
  );
};

export default Reviews;
