import { MainContainer } from "./styles.ts";
import { RecommendView } from "@pages/main/component/organism/index.ts";

const Index = () => {
  return (
    <MainContainer>
      <section>
        <RecommendView />
      </section>
    </MainContainer>
  );
};

export default Index;
