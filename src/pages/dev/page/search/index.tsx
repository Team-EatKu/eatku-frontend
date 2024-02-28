import { SearchContainer } from "./styles.ts";
import { SearchView } from "@pages/search/component/organism/index.ts";
import { Filter } from "@organism/index.tsx";

const Index = () => {
  return (
    <SearchContainer>
      <section>
        <Filter />
      </section>
      <section>
        <SearchView />
      </section>
    </SearchContainer>
  );
};

export default Index;
