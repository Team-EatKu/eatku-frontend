import { DetailContainer } from "./styles.ts";
import {
  Detail,
  Info,
  Menus,
  Reviews,
} from "@pages/detail/component/organism/index.ts";

const Index = () => {
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

export default Index;
