import { RestaurantActionProps } from "@pages/detail/typings/component/organism.ts";
import { RestaurantActionContainer } from "./styles.ts";
import { TextView } from "@molecule/index.tsx";
import { Icons } from "@styles";

const RestaurantAction = ({
  className = "",
  customStyle,
  ...props
}: RestaurantActionProps) => {
  return (
    <RestaurantActionContainer
      className={`detail__info ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <TextView text={"찜하기"} icon={Icons.favorite} />
      <TextView text={"공유하기"} icon={Icons.share} />
      <TextView text={"리뷰쓰기"} icon={Icons.rate_review} />
    </RestaurantActionContainer>
  );
};

export default RestaurantAction;
