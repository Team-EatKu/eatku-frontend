import { DetailContainer } from "./styles.ts";
import {
  Detail,
  Info,
  Menus,
} from "../../../detail/component/organism/index.ts";

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
    </DetailContainer>
  );
};

export default index;
