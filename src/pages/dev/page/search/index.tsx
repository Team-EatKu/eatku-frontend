import { SearchContainer } from "./styles.ts";
import { SearchView } from "@pages/search/component/organism/index.ts";

const index = () => {
  return (
    <SearchContainer>
      <section>
        <SearchView />
      </section>
    </SearchContainer>
  );
};

export default index;
