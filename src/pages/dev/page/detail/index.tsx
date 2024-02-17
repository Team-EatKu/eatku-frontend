import { DetailContainer } from "./styles.ts";
import {
  Detail,
  Info,
  Menus,
  Reviews,
} from "@pages/detail/component/organism/index.ts";

const index = () => {
  return (
    <DetailContainer>
      <section>
        <Info />
      </section>
      <section>
        <Detail />
      </section>
      <section>
        <Menus />
      </section>
      <section>
        <Reviews />
      </section>
    </DetailContainer>
  );
};

export default index;
