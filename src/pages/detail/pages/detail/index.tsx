import { DetailContainer } from "./styles.ts";
import MainLayout from "../../../../common/layout/MainLayout";
import { Detail, Info, Menus, Reviews } from "@pages/detail/component/organism";

const index = () => {
  return (
    <DetailContainer>
      <MainLayout>
        <Info />
        <Detail />
        <Menus />
        <Reviews />
      </MainLayout>
    </DetailContainer>
  );
};

export default index;
