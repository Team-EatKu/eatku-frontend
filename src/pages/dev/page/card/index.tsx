import { CardContainer } from "./styles.ts";
import { MainCard, SearchCard } from "@organism/index.tsx";

const index = () => {
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

export default index;
