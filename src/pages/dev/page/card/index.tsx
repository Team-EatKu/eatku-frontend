import { CardContainer } from "./styles.ts";
import { SearchCard } from "@organism/index.tsx";

const index = () => {
  return (
    <CardContainer>
      <section>
        <SearchCard />
      </section>
    </CardContainer>
  );
};

export default index;
