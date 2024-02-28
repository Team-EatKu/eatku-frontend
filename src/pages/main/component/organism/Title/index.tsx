import { TitleProps } from "@pages/main/typings/component/organism.ts";
import { TitleContainer } from "./styles.ts";

const Title = ({
  name,
  lectureBuilding,
  baseLocation = "현위치",
  className = "",
  customStyle,
  ...props
}: TitleProps) => {
  return (
    <TitleContainer
      className={`title ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="title__text">
        <span>{`${name}님이 자주 가는`}</span>
        <span
          className={"title__lectureBuilding"}
        >{` ${lectureBuilding} `}</span>
        <span>근처 맛집</span>
      </div>
      <div className="title__base-location">{`${baseLocation} 기준으로 >`}</div>
    </TitleContainer>
  );
};

export default Title;
