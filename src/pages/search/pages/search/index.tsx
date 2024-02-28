import { SearchContainer } from "./styles.ts";
import MainLayout from "../../../../common/layout/MainLayout";
import { SearchView } from "@pages/search/component/organism";
import { Filter } from "@organism/index.tsx";

const index = () => {
  return (
    <SearchContainer>
      <MainLayout>
        <Filter />
        <SearchView />
      </MainLayout>
    </SearchContainer>
  );
};

export default index;
