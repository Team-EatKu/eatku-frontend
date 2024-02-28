import { RecommendListProps } from "@pages/main/typings/component/organism.ts";
import { RecommendListContainer } from "./styles.ts";
import { MainCard } from "@organism/index.tsx";

const RecommendList = ({
  title,
  className = "",
  customStyle,
  ...props
}: RecommendListProps) => {
  return (
    <RecommendListContainer
      className={`recommend-list ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="recommend-list__title">{title}</div>
      <div className="recommend-list__content">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </RecommendListContainer>
  );
};

export default RecommendList;
