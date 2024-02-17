import { DetailContainer } from "./styles.ts";
import { Detail, Info } from "../../../detail/component/organism/index.ts";

const index = () => {
  return (
    <DetailContainer>
      <section>
        <Info />
      </section>
      <section>
        <Detail />
      </section>
    </DetailContainer>
  );
};

export default index;
