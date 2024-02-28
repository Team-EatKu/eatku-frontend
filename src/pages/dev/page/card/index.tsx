import { CardContainer } from "./styles.ts";
import { MainCard, SearchCard } from "@organism/index.tsx";

const Index = () => {
  return (
    <CardContainer>
      <section>
        <SearchCard />
      </section>
      <section>
        <MainCard />
      </section>
    </CardContainer>
  );
};

export default Index;
