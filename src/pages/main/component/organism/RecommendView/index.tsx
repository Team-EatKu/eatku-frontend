import { RecommendViewProps } from "@pages/main/typings/component/organism.ts";
import { RecommendViewContainer } from "./styles.ts";
import { TextView } from "@molecule/index.tsx";
import { RecommendList } from "@pages/main/component/organism/index.ts";
import { Icons } from "@styles";

const RecommendView = ({
  className,
  customStyle,
  ...props
}: RecommendViewProps) => {
  return (
    <RecommendViewContainer
      className={`recommend-view ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="recommend-view__header">
        <TextView text={"필터"} icon={Icons.filter_alt} />
        <TextView text={"거리순"} icon={Icons.arrow_drop_down} />
      </div>
      <div className="recommend-view__content">
        <RecommendList title={"간단한 식사가 땡긴다면"} />
        <RecommendList title={"친구들과 함께하는 즐거운 시간"} />
      </div>
    </RecommendViewContainer>
  );
};

export default RecommendView;
