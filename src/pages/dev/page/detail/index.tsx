import { DetailContainer } from "./styles.ts";
import { Info } from "../../../detail/component/organism/index.ts";

const index = () => {
  return (
    <DetailContainer>
      <div className="organism">
        <Info />
      </div>
    </DetailContainer>
  );
};

export default index;
