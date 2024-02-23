import { ReviewProps } from "@pages/detail/typings/component/organism.ts";
import { ReviewContainer } from "./styles.ts";
import Profile from "@molecule/Profile";
import { Image } from "@atom/index.tsx";

const Review = ({ data, className, customStyle, ...props }: ReviewProps) => {
  return (
    <ReviewContainer
      className={`review ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="review__header">
        <Profile
          src={data.user.profileImageUrl}
          name={data.user.nickName}
          variant={"review"}
          rate={data.scope}
        />
        <div className="review__date">5일 전</div>
      </div>
      <div className="review__content">
        <Image
          className={"review__image"}
          src={data.imageUrls[0]}
          width={"100%"}
          aspectRatio={"930 / 467"}
        />
        <div className="review__text">{data.content}</div>
      </div>
    </ReviewContainer>
  );
};

export default Review;
