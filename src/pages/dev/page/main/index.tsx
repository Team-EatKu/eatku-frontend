import { MainContainer } from "./styles.ts";
import { RecommendView } from "@pages/main/component/organism/index.ts";

const index = () => {
  return (
    <MainContainer>
      <section>
        <RecommendView />
      </section>
    </MainContainer>
  );
};

export default index;
