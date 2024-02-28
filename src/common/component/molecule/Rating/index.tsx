import { RatingProps } from "@typings/common/molecule.ts";
import { RatingContainer } from "./styles.ts";
import { Image } from "@atom/index.tsx";
import star from "@img/icon/star.svg";

const Rating = ({
  current,
  max = "5.0",
  className = "",
  customStyle,
  ...props
}: RatingProps) => {
  return (
    <RatingContainer
      className={`rating ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <Image src={star} width={"2.4rem"} />
      <div className="rating__score">
        <div className="rating__current">{current}</div>
        <div className="rating__max">{`/${max}`}</div>
      </div>
    </RatingContainer>
  );
};

export default Rating;
