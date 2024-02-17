import { ReviewProps } from "@pages/detail/typings/component/organism.ts";
import { ReviewContainer } from "./styles.ts";
import Profile from "@molecule/Profile";

const Review = ({ data, className, customStyle, ...props }: ReviewProps) => {
  return (
    <ReviewContainer
      className={`detail__detail ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <Profile
        src={data.user.profileImageUrl}
        name={data.user.nickName}
        variant={"review"}
        rate={data.scope}
      />
    </ReviewContainer>
  );
};

export default Review;
